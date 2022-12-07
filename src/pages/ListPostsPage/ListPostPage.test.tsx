import renderWithProviders from "../../mocks/storeMock";
import { screen } from "@testing-library/react";
import ListPostPage from "./ListPostsPage";
import { mockStorePostList } from "../../mocks/statesMockStore/mockStorePosts";
describe("Given Form component", () => {
  describe("When  its render DetailPostPage", () => {
    test("Then its should a return listRender", () => {
      renderWithProviders(<ListPostPage />, { store: mockStorePostList });

      const listRender = screen.getByRole("list");

      expect(listRender).toBeInTheDocument();
    });
  });
});
