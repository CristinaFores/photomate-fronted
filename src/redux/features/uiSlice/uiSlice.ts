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
    setLoadinTrue: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),
    setLoadingFalse: (currentUiState) => ({
      ...currentUiState,
      isLoading: false,
    }),
    showModalError: (
      currentUiState,
      action: PayloadAction<ShowModalActionPayload>
    ) => ({
      ...currentUiState,
      modal: {
        text: action.payload.text,
        isError: action.payload.isError,
        showModal: true,
      },
    }),
    hiddenModal: (currentUiState) => ({
      ...currentUiState,
      modal: {
        text: "",
        showModal: false,
        isError: false,
      },
    }),
  },
});

export const {
  setLoadinTrue: setLoadingTrueActionCreator,
  setLoadingFalse: setLoadingFalseActionCreator,
  showModalError: showModalActionCreator,
  hiddenModal: hiddenModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
