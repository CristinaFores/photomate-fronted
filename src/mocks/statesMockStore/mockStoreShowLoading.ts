import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../../redux/features/postSlice/postSlice";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { userReducer } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import { mockUiLoadingShowState } from "../statesMock/mockStateui";
import { initialPostState } from "../storeMock";

export const mockUserStateLoggued = {
  id: "",
  token: "",
  username: "",
  isLogged: true,
};

const mockLoadingShownStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    post: postsReducer,
  },
  preloadedState: {
    ui: mockUiLoadingShowState,
    user: mockUserStateLoggued,
    post: initialPostState,
  },
});

export default mockLoadingShownStore;
