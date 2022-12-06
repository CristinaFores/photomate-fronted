import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../../mocks/ProwiderWrapper";
import { mockInitialStore } from "../../mocks/storeMock";
import {
  hiddenLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { userLogoutActionCreator } from "../../redux/features/userSlice/userSlice";
import { JwtPayloadCustom } from "../../utils/types";
import { RegisterData, UserCredentials } from "./types";
import useUser from "./useUser";

const userMock = {
  username: "Cristina",
  password: "12345678",
  id: "123456789",
};

jest.mock("jwt-decode", () => {
  return () =>
    ({ username: userMock.username, id: userMock.id } as JwtPayloadCustom);
});

const mockRemoveToken = jest.fn();

jest.mock("../useToken/useToken", () => {
  return () => ({
    deleteToken: mockRemoveToken,
  });
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));
describe("Given the custom hook useUser", () => {
  describe("When it's method registerUser is invoked with  email: cristina@email.com username: Cristina,password: 12345678", () => {
    test("Then dispatch should be called  showModalActionCreator  with  with text: Te has registrado correctamente, Por favor inicia sesión,", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const user: RegisterData = {
        email: "cristina@email.com",
        username: "Cristina",
        password: "12345678",
      };

      const actionPayload = {
        isError: false,
        text: "Te has registrado correctamente, Por favor inicia sesión",
      };

      const newUser = user;

      await registerUser(newUser);

      expect(dispatchSpy).toHaveBeenCalledWith(
        showModalActionCreator(actionPayload)
      );
    });
  });

  describe("When its method registerUser is invoked with username email: cristina@email.com username: Cristina,password: 12345678 but the user is already registered in the database", () => {
    test("Then dispatch should be called with  with an error message", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const user: RegisterData = {
        email: "cristina@email.com",
        username: "",
        password: "12345678",
      };

      const actionPayload = {
        isError: true,
        text: "El usuario ya existe",
      };

      await registerUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(
        showModalActionCreator(actionPayload)
      );
    });
  });
});

describe("Given the useUser custom hook", () => {
  describe("When its method loginUser is invoked", () => {
    test("Then its should  call the dispatch with actions showLoadingActionCreator and hiddenLoadingActionCreator", async () => {
      const user: UserCredentials = {
        username: "Cristina",
        password: "123456789",
      };
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      await loginUser(user);

      expect(dispatchSpy).toHaveBeenCalledWith(showLoadingActionCreator());

      expect(dispatchSpy).toHaveBeenCalledWith(hiddenLoadingActionCreator());
    });
  });

  describe("When its method loginUser is invoked with token incorrect", () => {
    test("Then its should  call the dispatch showLoadingActionCreator", async () => {
      const user: UserCredentials = {
        username: "Cristina",
        password: "12345678",
      };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      await loginUser(user);
      expect(dispatchSpy).toHaveBeenCalledWith(showLoadingActionCreator());
    });
  });

  describe("When its method userLogout is invoked", () => {
    test("Then deleteToken should be called and dispatch should be called with 'userLogoutActionCreator'", () => {
      const { result } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      result.current.userLogout();

      expect(mockRemoveToken).toHaveBeenCalled();
      expect(dispatchSpy).toBeCalledWith(userLogoutActionCreator());
      expect(mockedUseNavigate).toHaveBeenCalledWith("/login");
    });
  });
});
