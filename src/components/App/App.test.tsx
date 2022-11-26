import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/storeMock";

import App from "./App";

describe("Given an App component", () => {
  describe("When is render", () => {
    test("Then it should receives a main, aria label 'home page'", () => {
      renderWithProviders(<App />);

      const renderHome = screen.queryByRole("main", {
        name: "home page",
      });

      expect(renderHome).toBeInTheDocument();
    });
  });
});
