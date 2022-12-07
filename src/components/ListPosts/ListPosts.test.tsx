import renderWithProviders from "../../mocks/storeMock";
import { screen } from "@testing-library/react";
import ListPosts from "./ListPosts";
import userEvent from "@testing-library/user-event";
import { mockStorePostList } from "../../mocks/statesMockStore/mockStorePosts";

describe("Given component ListPostsHome", () => {
  describe("When it recives state store page 2", () => {
    test("Then its should show card with headding and list cards  and invoked page state the pages'", async () => {
      renderWithProviders(<ListPosts key={1} />, { store: mockStorePostList });

      const listPost = screen.getByRole("list");
      const expectButtonPagination = screen.getByRole("button", {
        name: "Cargar más",
      });
      await userEvent.click(expectButtonPagination);

      expect(expectButtonPagination).toBeInTheDocument();
      expect(listPost).toBeInTheDocument();
    });
  });

  describe("Given component ListPostsHome", () => {
    describe("When it recives state store", () => {
      test("Then its should show text no results'", async () => {
        renderWithProviders(<ListPosts key={0} />);

        const expectHeading = screen.getByText(
          "Lo siento, no se han encontrado resultados"
        );

        expect(expectHeading).toBeInTheDocument();
      });
    });
  });
});
