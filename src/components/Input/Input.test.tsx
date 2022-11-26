import { render, screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/storeMock";
import Input from "./Input";

describe("Given a Input component", () => {
  describe("When it  rendered", () => {
    test("Then it should show input with placholder: username", () => {
      const expectLabel = "username";

      renderWithProviders(
        <Input
          type={"text"}
          placeholder="username"
          htmlFor="username"
          id="username"
          textLabel={expectLabel}
        />
      );

      const expectIinput = screen.getByRole("textbox", {
        name: "username",
      });

      expect(expectIinput).toBeInTheDocument();
    });
  });
});
