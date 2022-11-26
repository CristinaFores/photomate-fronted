import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/storeMock";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it render", () => {
    test("Then it should reply with the message 'Please wait' by the accesibility function'", () => {
      const expectedMessage = "Please wait";
      renderWithProviders(<Loading />);

      const message = screen.getByTestId("custom-element");

      expect(message).toHaveAttribute("aria-label", expectedMessage);
    });
  });
});
