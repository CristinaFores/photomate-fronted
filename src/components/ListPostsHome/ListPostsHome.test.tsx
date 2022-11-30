import renderWithProviders from "../../mocks/storeMock";
import { screen } from "@testing-library/react";
import ListPostsHome from "./ListPostsHome";

describe("Given component ListPostsHome", () => {
  describe("When it render", () => {
    test("Then its should show card with titles:'Cristina' and list cards '", () => {
      renderWithProviders(<ListPostsHome />);

      const titleUser = screen.queryByRole("heading", {
        name: "Cristina",
      });

      const listPost = screen.getByRole("list");

      expect(titleUser).toBeInTheDocument();

      expect(listPost).toBeInTheDocument();
    });
  });
});
