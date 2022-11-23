import { UiState } from "./types";
import {
  hiddenModalActionCreator,
  setLoadingFalseActionCreator,
  setLoadingTrueActionCreator,
  showModalActionCreator,
  uiReducer,
} from "./uiSlice";

const mockUiState: UiState = {
  modal: {
    text: "",
    showModal: false,
    isError: false,
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

describe("Given a uiReducer showModalError", () => {
  describe("When it is invoked it receives the  the initial ui state mockUiState", () => {
    test("Then it shouldreturn a copy of the initial state with showModalError with showModal: false", () => {
      const expectedUiState = {
        modal: {
          isError: true,
          text: "This is error",
          showModal: true,
        },
        isLoading: false,
      };
      const expextActionPayload = {
        isError: true,
        text: "This is error",
      };

      const newUiState = uiReducer(
        mockUiState,
        showModalActionCreator(expextActionPayload)
      );

      expect(newUiState.modal).toStrictEqual(expectedUiState.modal);
    });
  });
});

describe("Given a uiReducer hiddenModal", () => {
  describe("When it is invoked it receives the  the initial ui state mockUiState", () => {
    test("Then it shouldreturn a copy of the initial state with showModalError with showModal: true", () => {
      const expectedUiState = {
        modal: {
          isError: false,
          text: "",
          showModal: false,
        },
        isLoading: false,
      };
      const expextActionPayload = {
        isError: false,
        text: "",
      };

      const newUiState = uiReducer(
        mockUiState,
        hiddenModalActionCreator(expextActionPayload)
      );

      expect(newUiState.modal).toStrictEqual(expectedUiState.modal);
    });
  });
});
