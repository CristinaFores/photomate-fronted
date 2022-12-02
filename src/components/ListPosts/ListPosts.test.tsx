import renderWithProviders from "../../mocks/storeMock";
import { screen } from "@testing-library/react";
import ListPosts from "./ListPosts";

describe("Given component ListPostsHome", () => {
  describe("When it render", () => {
    test("Then its should show card with headding and list cards '", () => {
      renderWithProviders(<ListPosts key={1} />);

      const listPost = screen.getByRole("list");

      expect(listPost).toBeInTheDocument();
    });
  });
});
