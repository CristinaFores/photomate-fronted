import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/storeMock";
import CardDetailPost from "./CardPostDetails";
import * as router from "react-router";
import userEvent from "@testing-library/user-event";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

describe("Given component CardDetailPost", () => {
  describe("When it render", () => {
    test("Then its should show one button and call navigate", async () => {
      renderWithProviders(
        <CardDetailPost
          description="descripcion"
          owner="cris"
          title="hola"
          imagePaths={["", ""]}
        />
      );
      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(navigate).toHaveBeenCalledWith("/home");
    });
  });
});
