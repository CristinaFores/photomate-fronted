import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../../redux/features/postSlice/postSlice";
import { PostsState } from "../../redux/features/postSlice/types";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { userReducer } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import {
  mockStatePostList,
  mockStatePostPage,
} from "../statesMock/mockStatePost";
import { mockUiLoadingShowState } from "../statesMock/mockStateui";
import { initialState } from "../storeMock";

export const mockStorePostPages: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    post: postsReducer,
  },
  preloadedState: {
    ui: mockUiLoadingShowState,
    user: initialState,
    post: mockStatePostPage,
  },
});

export const mockStorePostList: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    post: postsReducer,
  },
  preloadedState: {
    ui: mockUiLoadingShowState,
    user: initialState,
    post: mockStatePostList,
  },
});

export const mockUserStateLoggued = {
  id: "1",
  token: "",
  username: "Cris",
  isLogged: true,
};

export const mockStatePostUser: PostsState = {
  total: 2,
  posts: [],
  post: {
    id: "1",
    owner: { username: "Cris", id: "1" },
    title: "",
    description: "",
    location: "",
    imagePaths: [],
    date: "",
    tags: [],
    like: [],
  },
};

export const mockStorePostUserLoggued: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    post: postsReducer,
  },
  preloadedState: {
    ui: mockUiLoadingShowState,
    user: mockUserStateLoggued,
    post: mockStatePostUser,
  },
});
