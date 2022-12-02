import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/storeMock";
import CardPostList from "./CardPostList";
import * as router from "react-router";
import userEvent from "@testing-library/user-event";

const navigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

describe("Given component CardPostList", () => {
  describe("When it render", () => {
    test("Then its should show card with titles:'Cristina' and button 'Leer más', and to call navigate", async () => {
      renderWithProviders(
        <CardPostList
          owner={"Cris"}
          title={"hola"}
          imagePaths={["", ""]}
          id={""}
        />
      );

      const titleUser = screen.queryByRole("heading", {
        name: "hola",
      });

      const buttonLink = screen.getAllByRole("button");

      await userEvent.click(buttonLink[2]!);

      expect(titleUser).toBeInTheDocument();
      expect(navigate).toHaveBeenCalledWith("/posts/");
    });
  });
});
