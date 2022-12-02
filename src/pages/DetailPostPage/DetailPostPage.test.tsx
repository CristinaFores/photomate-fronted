import renderWithProviders from "../../mocks/storeMock";
import DetailPostPage from "./DetailPostPage";
import { screen } from "@testing-library/react";

describe("Given Form component", () => {
  describe("When  its render DetailPostPage", () => {
    test("Then its should a return button with text volver", () => {
      renderWithProviders(<DetailPostPage />);

      const buttonRender = screen.getByRole("button", {
        name: "volver",
      });

      expect(buttonRender).toBeInTheDocument();
    });
  });
});
