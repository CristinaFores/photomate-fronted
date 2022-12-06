import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import renderWithProviders from "../../mocks/storeMock";

import SearchInput from "./SearchInput";

jest.setTimeout(20000);

describe("Given a SearchInput component", () => {
  describe("When it renders", () => {
    test("Then it should show the input search", async () => {
      renderWithProviders(<SearchInput />);

      const inputSearch = screen.queryByRole("searchbox")!;

      await userEvent.type(inputSearch, "h", { delay: 2100 });

      expect(inputSearch).toBeInTheDocument();
    });
  });
});
