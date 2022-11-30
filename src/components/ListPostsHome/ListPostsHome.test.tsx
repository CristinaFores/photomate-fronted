import renderWithProviders from "../../mocks/storeMock";
import { screen } from "@testing-library/react";
import ListPostsHome from "./ListPostsHome";

describe("Given component ListPostsHome", () => {
  describe("When it render", () => {
    test("Then its should show card with headding and list cards '", () => {
      renderWithProviders(<ListPostsHome />);

      const listPost = screen.getByRole("list");

      expect(listPost).toBeInTheDocument();
    });
  });
});
