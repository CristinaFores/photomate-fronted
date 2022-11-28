import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "../../hooks/useUser/useUser";
import useUser from "../../hooks/useUser/useUser";
import renderWithProviders from "../../mocks/storeMock";

import LoginPage from "./LoginPage";

jest.mock("../../hooks/useUser/useUser", () => {
  const loginUser = jest.fn();
  return () => ({ loginUser });
});

describe("Given Form component", () => {
  describe("When  its render LoginPage", () => {
    test("Then its should a return a 1 input con texto, and button", () => {
      const nameInput = "Nombre*";
      renderWithProviders(<LoginPage />);

      const expectedInput = screen.getByRole("textbox", {
        name: nameInput,
      });
      const expectPasswordInput = screen.getByRole("button");

      expect(expectedInput).toBeInTheDocument();

      expect(expectPasswordInput).toBeInTheDocument();
    });

    describe("When it's rendered button it's clicked ,inside the Entrar button", () => {
      test("Then the form should be submited a call a login function", async () => {
        const { loginUser } = useUser();
        renderWithProviders(<LoginPage />);

        const expectIinputName = screen.queryByRole("textbox", {
          name: "Nombre*",
        })!;

        const passwordInput = screen.queryByLabelText("Contraseña*")!;

        await userEvent.type(expectIinputName, "1234567891");

        await userEvent.type(passwordInput, "1234567111");

        const button = screen.queryByRole("button", {
          name: "Entrar",
        })!;
        await userEvent.click(button);

        expect(loginUser).toHaveBeenCalled();
        expect(expectIinputName).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
      });
    });
  });
});
