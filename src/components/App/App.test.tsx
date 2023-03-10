import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainStyleColors from "../../style/themeColors";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import renderWithProviders, { mockInitialStore } from "../../mocks/storeMock";
import mockStoreModalShow from "../../mocks/statesMockStore/mockStoreModalShow";
import mockLoadingShownStore from "../../mocks/statesMockStore/mockStoreShowLoading";

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
      renderWithProviders(<App />, {
        initialEntries: ["/"],
        store: mockInitialStore,
      });

      const expectIinputName = screen.queryByRole("textbox", {
        name: "Usuario*",
      })!;
      const button = screen.queryByRole("button", {
        name: "Entrar",
      })!;
      const renderLink = screen.queryByRole("link", {
        name: "Registrarse",
      });

      expect(expectIinputName).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(renderLink).toBeInTheDocument();
    });
  });

  describe("When it's render with an error", () => {
    test("Then it should show Modal Component '", () => {
      renderWithProviders(<App />, {
        initialEntries: ["/"],
        store: mockStoreModalShow,
      });

      const expectImg = screen.getByRole("img", {
        name: "imagen error",
      });

      const expectButton = screen.queryByRole("button", {
        name: "Cerrar Ventana Modal",
      });

      expect(expectImg).toBeInTheDocument();
      expect(expectButton).toBeInTheDocument();
    });
  });

  describe("When it's render with an isLoading", () => {
    test("Then it should show loading Component '", () => {
      renderWithProviders(<App />, {
        initialEntries: ["/"],
        store: mockLoadingShownStore,
      });

      const expectLoading = screen.getByTestId("custom-element");

      expect(expectLoading).toBeInTheDocument();
    });
  });
});
