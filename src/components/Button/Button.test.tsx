import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../mocks/storeMock";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered with the text 'Log in' and an action", () => {
    test("Then it should show a button on the screen with the received text and the action on click", async () => {
      const buttonText = "Log in";

      const buttonAction = jest.fn();

      renderWithProviders(
        <Button text={buttonText} action={buttonAction} ariaLabel={""} />
      );

      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      await userEvent.click(renderedButton!);

      expect(renderedButton).toBeInTheDocument();
      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
