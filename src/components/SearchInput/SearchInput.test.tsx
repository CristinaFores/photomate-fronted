import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderWithProviders from "../../mocks/storeMock";

import SearchInput from "./SearchInput";

describe("Given SearchInput", () => {
  describe("When it is rendered", () => {
    test("Then it should a input search", async () => {
      renderWithProviders(<SearchInput />);

      const inputSearch = screen.getByRole("searchbox"!);

      await userEvent.type(inputSearch!, "a");

      expect(inputSearch).toBeInTheDocument();
    });
  });
});
