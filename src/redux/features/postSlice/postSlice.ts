import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostsState } from "./types";

const initialState: PostsState = {
  post: [],
};

const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    loadPost: (currentState, action: PayloadAction<Post[]>) => ({
      ...currentState,
      posts: action.payload,
    }),
  },
});

export const { loadPost: loadPostActionCreator } = postSlice.actions;
export const postsReducer = postSlice.reducer;
