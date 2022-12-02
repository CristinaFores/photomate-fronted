import renderWithProviders from "../../mocks/storeMock";
import { screen } from "@testing-library/react";
import ListPostPage from "./ListPostsPage";
describe("Given Form component", () => {
  describe("When  its render DetailPostPage", () => {
    test("Then its should a return listRender", () => {
      renderWithProviders(<ListPostPage />);

      const listRender = screen.getByRole("list");

      expect(listRender).toBeInTheDocument();
    });
  });
});
