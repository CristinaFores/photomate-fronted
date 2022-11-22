import { UiState } from "./types";
import { setLoadinTrueActionCreator, uiReducer } from "./uiSlice";

const mockUiState: UiState = {
  modal: {
    textmodal: "",
    showModal: false,
    error: false,
  },
  isLoading: false,
};

describe("Given a uiReducer", () => {
  describe("When it is invoked it receives the initial ui state mockUiState", () => {
    test("Then it should return a copy of the initial state with setLoadingTrue", () => {
      const expectedUiState = {
        ...mockUiState,
        isLoading: true,
      };

      const newUiState = uiReducer(mockUiState, setLoadinTrueActionCreator());

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
