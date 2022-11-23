import { configureStore } from "@reduxjs/toolkit";
import { UiState } from "../redux/features/uiSlice/types";
import { uiReducer } from "../redux/features/uiSlice/uiSlice";

const initialUiState: UiState = {
  modal: {
    text: "",
    showModal: false,
    isError: false,
  },
  isLoading: false,
};

export const mockInitialStore = configureStore({
  reducer: {
    ui: uiReducer,
  },

  preloadedState: {
    ui: initialUiState,
  },
});
