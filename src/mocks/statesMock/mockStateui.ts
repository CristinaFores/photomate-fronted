import { UiState } from "../../redux/features/uiSlice/types";

export const mockUiModalShowState: UiState = {
  isLoading: false,
  modal: {
    isError: true,
    showModal: true,
    text: "Error modal",
  },
};

export const mockUiLoadingShowState: UiState = {
  isLoading: true,
  modal: {
    isError: false,
    showModal: false,
    text: "",
  },
};
