import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../mocks/storeMock";
import CreateNewPost from "./CreateNewPost";

describe("Given component CreateNewPost", () => {
  describe("When it render", () => {
    test("Then its should show button with text 'Publicar', and textbox with text: 'Titulo de la la publicacion*'", async () => {
      renderWithProviders(<CreateNewPost />);

      const expectTextBox = screen.getByRole("textbox", {
        name: "Titulo de la la publicacion*",
      });
      const expectTextBoxDescription = screen.getByRole("textbox", {
        name: "Texto de la publicacion",
      });
      const expectButton = screen.getByRole("button", {
        name: "Publicar",
      });

      await userEvent.type(expectTextBox, "hola");
      await userEvent.type(expectTextBoxDescription, "hola");

      await userEvent.click(expectButton);
      expect(expectTextBox).toBeInTheDocument();
      expect(expectTextBoxDescription).toBeInTheDocument();
      expect(expectButton).toBeInTheDocument();
    });
  });
});
