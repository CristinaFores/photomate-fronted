import { screen } from "@testing-library/react";
import mockLoadingShownStore from "../../mocks/statesMockStore/mockStoreShowLoading";
import renderWithProviders, { mockInitialStore } from "../../mocks/storeMock";
import Layout from "./Layout";

describe("Given an Layout componen", () => {
  describe("When it's render", () => {
    test("Then it shoul render an App Component with main , headding eith text Photomate", () => {
      renderWithProviders(<Layout />, {
        initialEntries: ["/"],
        store: mockInitialStore,
      });

      const app = screen.getByRole("main");
      const appHeading = screen.queryByRole("heading", {
        name: "Photomate",
      });
      expect(appHeading).toBeInTheDocument();
      expect(app).toBeInTheDocument();
    });
  });
});

describe("Given an Layout component", () => {
  describe("When it's render", () => {
    test("Then it shoul render an App Component, with input name 'Nombre', a button  with text 'Entrar', and link 'Entrar", () => {
      renderWithProviders(<Layout />, {
        initialEntries: ["/"],
        store: mockLoadingShownStore,
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
});
