import renderWithProviders from "../../mocks/storeMock";
import Logo from "../Logo/Logo";
import Header from "./Header";
import { screen } from "@testing-library/react";

describe("Given component Header", () => {
  describe("When it render", () => {
    test("Then its should show header with title: Photomate", () => {
      renderWithProviders(<Header children={<Logo />} />);

      const renderHeader = screen.queryByRole("banner");
      const renderHeading = screen.queryByRole("heading", {
        name: "Photomate",
      });

      expect(renderHeader).toBeInTheDocument();
      expect(renderHeading).toBeInTheDocument();
    });
  });
});
