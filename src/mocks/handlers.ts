// src/mocks/handlers.js
import { rest } from "msw";
import { RegisterData } from "../hooks/useUser/types";

const url = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${url}/users/register`, async (req, res, ctx) => {
    const user = await req.json<RegisterData>();

    if (user.username === "") {
      return res(ctx.status(500), ctx.json({ error: "El usuario ya existe" }));
    }

    return res(ctx.status(201), ctx.json({}));
  }),
  rest.post(`${url}/users/login`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "kitten" }));
  }),
];
