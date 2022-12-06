import renderWithProviders from "../../mocks/storeMock";
import { screen } from "@testing-library/react";

import CreatePostPage from "./CreatePostPage";

describe("Given Form component", () => {
  describe("When  its render CreatePostPage", () => {
    test("Then its should a return button with text 'Publicar'", () => {
      renderWithProviders(<CreatePostPage />);

      const buttonRender = screen.getByRole("button", {
        name: "Publicar",
      });

      expect(buttonRender).toBeInTheDocument();
    });
  });
});
