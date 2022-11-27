import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainStyleColors from "../../style/themeColors";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { render, screen } from "@testing-library/react";

import { mockInitialStore } from "../../mocks/storeMock";

const mockError = {
  modal: {
    isError: true,
    text: "Algo ha ido mal",
    showModal: true,
  },
  isLoading: true,
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useAppDispatch: () => jest.fn(),
  useAppSelector: () => mockError,
}));

describe("Given an App componen", () => {
  describe("When it's render", () => {
    test("Then it shoul render an App Component with main , headding eith text Photomate", () => {
      render(
        <Provider store={mockInitialStore}>
          <ThemeProvider theme={mainStyleColors}>
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );

      const app = screen.getByRole("main");
      const appHeading = screen.queryByRole("heading", {
        name: "Photomate",
      });
      expect(appHeading).toBeInTheDocument();
      expect(app).toBeInTheDocument();
    });
  });
});

describe("Given an App component", () => {
  describe("When it's render", () => {
    test("Then it shoul render an App Component, with input name 'Nombre', a button  with text 'Entrar', and link 'Entrar", () => {
      const mockModal = {
        modal: {
          isError: false,
          text: "Perfecto",
          showModal: true,
        },
        isLoading: false,
      };

      jest.mock("react-redux", () => ({
        ...jest.requireActual("react-redux"),
        useAppDispatch: () => jest.fn(),
        useAppSelector: () => mockModal,
      }));

      render(
        <Provider store={store}>
          <ThemeProvider theme={mainStyleColors}>
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
          </ThemeProvider>
        </Provider>
      );

      const expectIinputName = screen.queryByRole("textbox", {
        name: "Nombre*",
      })!;
      const button = screen.queryByRole("button", {
        name: "Entrar",
      })!;
      const renderLink = screen.getByRole("link", {
        name: "Registrarse",
      });

      expect(expectIinputName).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(renderLink).toBeInTheDocument();
    });
  });
});
