import { screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";
import * as router from "react-router";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../mocks/storeMock";

const mockNavigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => mockNavigate);
});

describe("Given a NotFoundPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a button with text 'VOLVER'", () => {
      const buttonText = "VOLVER";

      renderWithProviders(<NotFoundPage />);

      const button = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When its rendered and it's 'VOLVER' button is clicked", () => {
    test("Then it should be called navigate", async () => {
      renderWithProviders(<NotFoundPage />);

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
