import { UiState } from "./types";
import {
  setLoadingFalseActionCreator,
  setLoadingTrueActionCreator,
  uiReducer,
} from "./uiSlice";

const mockUiState: UiState = {
  modal: {
    textmodal: "",
    showModal: false,
    error: false,
  },
  isLoading: false,
};

describe("Given a uiReducer setLoadingTrue", () => {
  describe("When it is invoked it receives the initial ui state mockUiState with isLoading", () => {
    test("Then it should return a copy of the initial state with setLoadingTrue with isLoading: true", () => {
      const expectedUiState = {
        ...mockUiState,
        isLoading: true,
      };

      const newUiState = uiReducer(mockUiState, setLoadingTrueActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a uiReducer setLoadingFalse", () => {
  describe("When it is invoked it receives the  the initial ui state mockUiState with isLoading", () => {
    test("Then it shouldreturn a copy of the initial state with setoadinfFalse with isLoading: false", () => {
      const expectedUiState = {
        ...mockUiState,
        isLoading: false,
      };
      const newUiState = uiReducer(mockUiState, setLoadingFalseActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
