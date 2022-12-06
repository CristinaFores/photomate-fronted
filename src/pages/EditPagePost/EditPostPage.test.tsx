import renderWithProviders from "../../mocks/storeMock";
import { screen } from "@testing-library/react";
import EditPostPage from "./EditPostPage";

describe("Given Form component", () => {
  describe("When  its render EditPostPage", () => {
    test("Then its should a return button with text 'Modificar'", () => {
      renderWithProviders(<EditPostPage />);

      const buttonRender = screen.getByRole("button", {
        name: "Modificar",
      });

      expect(buttonRender).toBeInTheDocument();
    });
  });
});
