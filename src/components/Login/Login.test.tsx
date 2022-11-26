import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { UserCredentials } from "../../hooks/useUser/types";
import "../../hooks/useUser/useUser";
import useUser from "../../hooks/useUser/useUser";
import renderWithProviders from "../../mocks/storeMock";
import Login from "./Login";

jest.mock("../../hooks/useUser/useUser", () => {
  const loginUser = jest.fn();
  return () => ({ loginUser });
});

describe("Given Login component", () => {
  describe("When it us rendered", () => {
    test("Then its should show input with text: 'Nombre*', a button with text 'Entrar'and  link with text: 'Registrarse'", () => {
      const nameInput = "Nombre*";
      const nameButton = "Entrar";
      const nameLink = "Registrarse";

      renderWithProviders(<Login />);

      const renderNameInput = screen.getByRole("textbox", {
        name: nameInput,
      });
      const renderPasswordInput = screen.getByRole("button", {
        name: nameButton,
      });
      const renderLink = screen.getByRole("link", {
        name: nameLink,
      });

      expect(renderNameInput).toBeInTheDocument();
      expect(renderPasswordInput).toBeInTheDocument();
      expect(renderLink).toBeInTheDocument();
    });

    describe("When it's rendered and the user submit username:'Cristina' and password '12345678',", () => {
      test("Then it should called with userIntroduccionData: username and password", async () => {
        const { loginUser } = useUser();
        const userIntroduccionData: UserCredentials = {
          username: "Cristina",
          password: "12345678",
        };
        renderWithProviders(<Login />);

        const expectIinputName = screen.queryByRole("textbox", {
          name: "Nombre*",
        })!;
        const button = screen.queryByRole("button", {
          name: "Entrar",
        })!;
        const passwordInput = screen.queryByLabelText("Contraseña*")!;

        await userEvent.type(expectIinputName, userIntroduccionData.username);
        await userEvent.type(passwordInput, userIntroduccionData.password);
        await userEvent.click(button);

        expect(loginUser).toHaveBeenCalledWith(userIntroduccionData);
        expect(expectIinputName).toBeInTheDocument();

        expect(passwordInput).toBeInTheDocument();
      });
    });
  });
});
