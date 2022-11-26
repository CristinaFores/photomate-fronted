import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import ProviderWrapper from "../../mocks/ProwiderWrapper";
import { mockInitialStore } from "../../mocks/storeMock";
import { JwtPayloadCustom } from "../../utils/types";

const mockUser = {
  username: "cristina",
  id: "123456789",
  token: "kitten",
};

jest.mock("jwt-decode", () => {
  return () =>
    ({
      id: mockUser.id,
      username: mockUser.username,
      token: mockUser.token,
    } as JwtPayloadCustom);
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

describe("Given the useToken custom hook", () => {
  describe("When its method getToken is invoked", () => {
    test("Then its should  call the dispatch and action  loginUserActionCreator", () => {
      const token = "kitten";
      const user = {
        id: "123456789",
        token: "kitten",
        username: "cristina",
      };

      Storage.prototype.getItem = jest.fn().mockReturnValue(token);

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      getToken();

      expect(dispatchSpy).toHaveBeenCalled();
      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator({ ...user, token })
      );
    });
  });

  describe("When its method getToken is invokedk", () => {
    test("Then its should  call not the dispatch", () => {
      Storage.prototype.getItem = jest.fn().mockReturnValue("");

      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      getToken();

      expect(dispatchSpy).not.toHaveBeenCalled();
    });
  });
});
