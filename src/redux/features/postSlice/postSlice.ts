import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: string;
  owner: string;
  user: string;
  title: string;
  description: string;
  location: string;
  image?: [];
  date?: Date;
  tags?: [];
  like?: [];
}

export interface PostState {
  posts: Post[];
  post: Post;
}

const initialState: PostState = {
  posts: [],
  post: {} as Post,
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

export const postsReducer = postSlice.reducer;
