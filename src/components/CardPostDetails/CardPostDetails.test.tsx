import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/storeMock";
import CardDetailPost from "./CardPostDetails";

describe("Given component CardDetailPost", () => {
  describe("When it render", () => {
    test("Then its should show card with img with text 'imagen de la publicacion', one button  ,", () => {
      renderWithProviders(
        <CardDetailPost description="descripcion" owner="cris" title="hola" />
      );

      const titleUser = screen.queryByRole("img", {
        name: "imagen de la publicacion",
      });

      expect(titleUser).toBeInTheDocument();
    });
  });
});
