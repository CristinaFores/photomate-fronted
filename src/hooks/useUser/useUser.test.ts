import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../../mocks/ProwiderWrapper";
import { mockInitialStore } from "../../mocks/storeMock";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { RegisterData } from "./types";
import useUser from "./useUser";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

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
