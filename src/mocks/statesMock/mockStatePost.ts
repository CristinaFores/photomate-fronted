import { Post, PostsState } from "../../redux/features/postSlice/types";

const post: Post = {
  id: "",
  owner: { username: "" },
  title: "",
  description: "",
  location: "",
  imagePaths: [],
  buckpicture: [],
  date: "",
  tags: [],
  like: [],
};

export const mockStatePostList: PostsState = {
  total: 2,
  posts: [post],
  post: {
    id: "",
    owner: { username: "" },
    title: "",
    description: "",
    location: "",
    imagePaths: [""],
    buckpicture: [""],
    date: "",
    tags: [],
    like: [],
  },
};

export const mockStatePostPage: PostsState = {
  total: 2,
  posts: [],
  post: {
    id: "",
    owner: { username: "" },
    title: "",
    description: "",
    location: "",
    imagePaths: [],

    date: "",
    tags: [],
    like: [],
  },
};
