import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/storeMock";
import CreateNewPost from "./CreateNewPost";

describe("Given component CreateNewPost", () => {
  describe("When it render", () => {
    test("Then its should show button with text 'Publicar', and textbox with text: 'Titulo de la la publicacion*'", async () => {
      renderWithProviders(<CreateNewPost />);

      const expectTextBox = screen.getByRole("textbox", {
        name: "Titulo de la la publicacion*",
      });
      const expectButton = screen.getByRole("button", {
        name: "Publicar",
      });

      expect(expectTextBox).toBeInTheDocument();
      expect(expectButton).toBeInTheDocument();
    });
  });
});
