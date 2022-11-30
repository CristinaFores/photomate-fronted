import { renderHook } from "@testing-library/react";
import axios from "axios";
import ProviderWrapper from "../../mocks/ProwiderWrapper";
import { mockInitialStore } from "../../mocks/storeMock";
import { showLoadingActionCreator } from "../../redux/features/uiSlice/uiSlice";
import usePost from "./usePost";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

describe("Given the custom hook usePos", () => {
  describe("When it's methodt loadPost is invoked", () => {
    test("Then dispatch should be called error with showModalActionCreator", async () => {
      const {
        result: {
          current: { loadPosts },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });

      await loadPosts();

      expect(dispatchSpy).toBeCalled();
    });
  });
});

describe("Given the custom hook usePost", () => {
  describe("When it's methodt loadPost is invoked", () => {
    test("Then dispatch should be called", async () => {
      const {
        result: {
          current: { loadPosts },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });

      axios.get = jest.fn().mockRejectedValue(new Error());
      await loadPosts();

      expect(dispatchSpy).toHaveBeenCalledWith(showLoadingActionCreator());
    });
  });
});
