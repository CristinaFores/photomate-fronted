import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostsState } from "./types";

const initialPostState: PostsState = {
  total: 0,
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

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    loadPost: (
      currentState,
      action: PayloadAction<{ posts: Post[]; total: number }>
    ) => ({
      ...currentState,
      posts: [...action.payload.posts],
      total: action.payload.total,
    }),
    loadOnePost: (currentState, action: PayloadAction<Post>) => ({
      ...currentState,
      post: action.payload,
    }),
    deletePost: (currentState: PostsState, action: PayloadAction<string>) => ({
      ...currentState,
      posts: currentState.posts.filter((post) => post.id !== action.payload),
    }),
  },
});

export const {
  loadPost: loadPostActionCreator,
  loadOnePost: loadOnePostActionCreator,
  deletePost: deletePostActionCreator,
} = postSlice.actions;
export const postsReducer = postSlice.reducer;
