import { screen } from "@testing-library/react";

import renderWithProviders from "../../mocks/storeMock";
import { store } from "../../redux/store";

import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 3 links , with names: 'Nueva publicacion','Inicio', 'Perfil Usuario'", () => {
      renderWithProviders(<Navbar />, {
        store: store,
      });
      const linkNewPost = screen.getByRole("link", {
        name: "Nueva publicacion",
      });
      const linkHomePost = screen.getByRole("link", {
        name: "Inicio",
      });
      const linkProfilePost = screen.getByRole("link", {
        name: "Perfil usuario",
      });

      expect(linkNewPost).toBeInTheDocument();
      expect(linkHomePost).toBeInTheDocument();
      expect(linkProfilePost).toBeInTheDocument();
    });
  });
});
