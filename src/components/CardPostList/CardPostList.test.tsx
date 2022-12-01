import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/storeMock";
import CardPostList from "./CardPostList";

describe("Given component CardPostList", () => {
  describe("When it render", () => {
    test("Then its should show card with titles:'Cristina' and button 'Leer más' and one list images", () => {
      renderWithProviders(
        <CardPostList owner={"Cristina"} title={""} imagePaths={[""]} />
      );

      const titleUser = screen.queryByRole("heading", {
        name: "Cristina",
      });

      const buttonDetails = screen.queryByRole("button", {
        name: "Leer mas",
      });

      const images = screen.queryAllByRole("img", {
        name: "imagenes de la publicacion",
      });
      expect(titleUser).toBeInTheDocument();
      expect(buttonDetails).toBeInTheDocument();
      expect(images[0]).toBeInTheDocument();
    });
  });
});
