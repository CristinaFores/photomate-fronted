import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

const initialUiState: UiState = {
  modal: {
    textmodal: "",
    showModal: false,
    error: false,
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
  },
});
export const { setLoadinTrue: setLoadinTrueActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
