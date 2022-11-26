import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import "../../hooks/useUser/useUser";
import useUser from "../../hooks/useUser/useUser";
import renderWithProviders, { mockInitialStore } from "../../mocks/storeMock";
import GlobalStyle from "../../style/GlobalStyle";

import RegisterPage from "./RegisterPage";

jest.mock("../../hooks/useUser/useUser", () => {
  const registerUser = jest.fn();
  return () => ({ registerUser });
});

describe("Given Form component", () => {
  describe("When  its render RegisterPage", () => {
    test("Then its should a return a 1 input con texto, and button", () => {
      const nameInput = "Nombre*";
      renderWithProviders(
        <Provider store={mockInitialStore}>
          <GlobalStyle />
          <RegisterPage />
        </Provider>
      );

      const expectedInput = screen.getByRole("textbox", {
        name: nameInput,
      });
      const expectPasswordInput = screen.getByRole("button");

      expect(expectedInput).toBeInTheDocument();

      expect(expectPasswordInput).toBeInTheDocument();
    });

    describe("When it's rendered button it's clicked ,inside the Register button", () => {
      test("Then the form should be submited a call a register function", async () => {
        const { registerUser } = useUser();
        renderWithProviders(
          <Provider store={mockInitialStore}>
            <GlobalStyle />
            <RegisterPage />
          </Provider>
        );

        const expectIinputName = screen.queryByRole("textbox", {
          name: "Nombre*",
        })!;

        const expectIinputEmail = screen.queryByRole("textbox", {
          name: "Email*",
        })!;

        const passwordInput = screen.queryByLabelText("Contraseña*")!;

        await userEvent.type(expectIinputName, "1234567891");

        await userEvent.type(expectIinputEmail, "cris@mil.com");
        await userEvent.type(passwordInput, "1234567111");

        const button = screen.queryByRole("button", {
          name: "Registrase",
        })!;
        await userEvent.click(button);

        expect(registerUser).toHaveBeenCalled();
        expect(expectIinputName).toBeInTheDocument();
        expect(expectIinputEmail).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
      });
    });
  });
});
