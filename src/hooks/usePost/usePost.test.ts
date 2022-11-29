import { renderHook } from "@testing-library/react";
import axios from "axios";
import ProviderWrapper from "../../mocks/ProwiderWrapper";
import { mockInitialStore } from "../../mocks/storeMock";
import { showLoadingActionCreator } from "../../redux/features/uiSlice/uiSlice";
import usePost from "./usePost";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

describe("Given the custom hook usePost", () => {
  describe("When it's methodt loadPost is invoked", () => {
    test("Then dispatch should be called error with showModalActionCreator", async () => {
      const {
        result: {
          current: { loadPosts },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });

      mockedAxios.get.mockResolvedValueOnce(undefined);
      await loadPosts();

      expect(dispatchSpy).toHaveBeenCalledWith(showLoadingActionCreator());
    });
  });
});
