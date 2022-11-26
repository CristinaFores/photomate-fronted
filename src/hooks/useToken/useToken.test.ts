import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import ProviderWrapper from "../../mocks/ProwiderWrapper";
import { mockInitialStore } from "../../mocks/storeMock";
import { JwtPayloadCustom } from "../../utils/types";

const mockUser = {
  username: "cristina",
  id: "123456789",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNyaXN0aW5hIiwiaWQiOiIxMjM0NTY3ODkiLCJpYXQiOjE2NjgyNjkxNzksImV4cCI6MTY2ODQ0MTk3OX0.SscRMw9fHjIbNR-cd9NjzCxz-AUUpJ1YSQjZghZOcwo",
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
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNyaXN0aW5hIiwiaWQiOiIxMjM0NTY3ODkiLCJpYXQiOjE2NjgyNjkxNzksImV4cCI6MTY2ODQ0MTk3OX0.SscRMw9fHjIbNR-cd9NjzCxz-AUUpJ1YSQjZghZOcwo";
      const user = {
        id: "123456789",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNyaXN0aW5hIiwiaWQiOiIxMjM0NTY3ODkiLCJpYXQiOjE2NjgyNjkxNzksImV4cCI6MTY2ODQ0MTk3OX0.SscRMw9fHjIbNR-cd9NjzCxz-AUUpJ1YSQjZghZOcwo",
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
});
