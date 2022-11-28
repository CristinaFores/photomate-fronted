import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShowModalActionPayload, UiState } from "./types";

const initialUiState: UiState = {
  modal: {
    text: "",
    showModal: false,
    isError: false,
  },
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),
    hiddeLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: false,
    }),
    showModal: (
      currentUiState,
      action: PayloadAction<ShowModalActionPayload>
    ) => ({
      ...initialUiState,
      modal: {
        text: action.payload.text,
        isError: action.payload.isError,
        showModal: true,
      },
    }),
    hiddenModal: (currentUiState) => ({
      ...initialUiState,
      modal: {
        text: "",
        showModal: false,
        isError: false,
      },
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hiddeLoading: hiddenLoadingActionCreator,
  showModal: showModalActionCreator,
  hiddenModal: hiddenModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
