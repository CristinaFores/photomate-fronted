// src/mocks/handlers.js
import { rest } from "msw";
import { RegisterData, UserCredentials } from "../hooks/useUser/types";
import { Post } from "../redux/features/postSlice/types";

const url = process.env.REACT_APP_API_URL;

export const currentPostMock: Post = {
  id: "123456",
  owner: { username: "" },
  title: "new post",
  description: "",
  imagePaths: [],
};

export const handlers = [
  rest.post(`${url}/users/register`, async (req, res, ctx) => {
    const user = await req.json<RegisterData>();

    if (user.username === "") {
      return res(ctx.status(500), ctx.json({ error: "El usuario ya existe" }));
    }

    return res(ctx.status(201), ctx.json({}));
  }),

  rest.post(`${url}/users/login`, async (req, res, ctx) => {
    const { password } = await req.json<UserCredentials>();

    if (password === "12345678") {
      return res(
        ctx.status(401),
        ctx.json({ error: "Incorrect username or password" })
      );
    }

    return res(ctx.status(200), ctx.json({ token: "kitten" }));
  }),

  rest.get(`${url}/posts`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "123456",
          owner: "123456",
          title: "new post",
          description: "",
          imagePaths: [],
        },
      ])
    );
  }),
  rest.get(`${url}/posts/6388c3df08d4c054bd2e59e9`, (req, res, ctx) => {
    return res(ctx.status(404), ctx.json({}));
  }),
  rest.get(`${url}/posts/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(currentPostMock));
  }),

  rest.delete(`${url}/posts/6388c3df08d4c054bd2e59e`, (req, res, ctx) => {
    return res(ctx.status(400), ctx.json({}));
  }),
  rest.delete(`${url}/posts/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),

  rest.post(`${url}/posts`, (req, res, ctx) => {
    return res.once(ctx.status(201));
  }),

  rest.post(`${url}/posts`, (req, res, ctx) => {
    return res(ctx.status(400));
  }),
  rest.patch(`${url}/posts/12345`, (req, res, ctx) => {
    return res.once(ctx.status(400));
  }),

  rest.patch(`${url}/posts/:id`, (req, res, ctx) => {
    return res.once(ctx.status(201));
  }),
];
