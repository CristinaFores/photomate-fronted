import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/storeMock";
import CardPostList from "./CardPostList";

describe("Given component CardPostList", () => {
  describe("When it render", () => {
    test("Then its should show card with titles:'Cristina', 'Que guay el bootcamp' and button 'Leer más'", () => {
      renderWithProviders(<CardPostList />);

      const titleUser = screen.getByRole("heading", {
        name: "Cristina",
      });

      const buttonDetails = screen.getByRole("button", {
        name: "Leer mas",
      });

      expect(titleUser).toBeInTheDocument();

      expect(buttonDetails).toBeInTheDocument();
    });
  });
});
