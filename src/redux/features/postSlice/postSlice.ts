import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostsState } from "./types";

const initialPostState: PostsState = {
  posts: [],
  post: {
    id: "",
    owner: "",
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
    loadPost: (currentState, action: PayloadAction<Post[]>) => ({
      ...currentState,
      posts: action.payload,
    }),
    loadOnePost: (currentState, action: PayloadAction<Post>) => ({
      ...currentState,
      post: action.payload,
    }),
  },
});

export const {
  loadPost: loadPostActionCreator,
  loadOnePost: loadOnePostActionCreator,
} = postSlice.actions;
export const postsReducer = postSlice.reducer;
