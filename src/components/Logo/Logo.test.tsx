import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Given a Logo component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 'Photomate'", () => {
      const expectedHeading = {
        level: 1,
        name: "Photomate",
      };

      render(<Logo />);

      const renderedHeading = screen.queryByRole("heading", expectedHeading);

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
