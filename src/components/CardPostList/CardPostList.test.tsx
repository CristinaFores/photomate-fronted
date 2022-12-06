import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/storeMock";
import CardPostList from "./CardPostList";
import * as router from "react-router";
import userEvent from "@testing-library/user-event";
import { mockStorePostUserLoggued } from "../../mocks/statesMockStore/mockStorePosts";

const navigate = jest.fn();
beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

describe("Given component CardPostList", () => {
  describe("When it render", () => {
    test("Then its should show card with titles:'Cristina' and button 'Leer más', and to call navigate", async () => {
      const owner = {
        username: "Cris",
      };
      renderWithProviders(
        <CardPostList
          owner={owner}
          title={"hola"}
          imagePaths={["", ""]}
          id={""}
        />
      );

      const titleUser = screen.queryByRole("heading", {
        name: "hola",
      });

      const buttonLink = screen.getAllByRole("button");
      const icon = screen.getAllByRole("img");

      await userEvent.click(icon[0]);

      await userEvent.click(icon[1]);

      await userEvent.click(buttonLink[0]!);
      await userEvent.click(buttonLink[1]!);
      await userEvent.click(buttonLink[2]!);

      expect(titleUser).toBeInTheDocument();
      expect(navigate).toHaveBeenCalledWith("/posts/");
    });
  });
});

describe("Given component  CardPostList", () => {
  describe("When it render CardPostList", () => {
    test("Then its should show card with titles:'Cristina' and button 'Leer más', and to call navigate /posts/", async () => {
      const owner = {
        username: "Cris",
      };
      renderWithProviders(
        <CardPostList
          owner={owner}
          title={"hola"}
          imagePaths={["", ""]}
          id={""}
        />
      );

      const icon = screen.getAllByRole("img");
      const buttonLink = screen.getAllByRole("button");
      await userEvent.click(buttonLink[0]!);

      expect(icon[0]).toBeInTheDocument();
      expect(navigate).toBeCalled();
    });
  });

  describe("Given component  CardPostList", () => {
    describe("When it render CardPostList, and loggued true", () => {
      test("Then its should show card with titles:'Cristina' and button 'Leer más', and to call navigate /posts/", async () => {
        const owner = {
          username: "Cris",
          id: "1",
        };
        renderWithProviders(
          <CardPostList
            owner={owner}
            title={"hola"}
            imagePaths={["", ""]}
            id={"1"}
          />,
          { store: mockStorePostUserLoggued }
        );

        const icon = screen.getAllByRole("img");
        const buttonLink = screen.getAllByRole("button");
        await userEvent.click(buttonLink[0]!);

        expect(icon[0]).toBeInTheDocument();
        expect(navigate).toBeCalled();
      });
    });

    describe("When it render compoent and userId equal a id owner", () => {
      test("Then its should show card with titles:'Cristina' edit button", async () => {
        const owner = {
          username: "Cris",
        };
        renderWithProviders(
          <CardPostList
            owner={owner}
            title={"hola"}
            imagePaths={["", ""]}
            id={""}
          />
        );

        const titleUser = screen.queryByRole("heading", {
          name: "hola",
        });

        const buttonLink = screen.getAllByRole("button");
        const icon = screen.getAllByRole("img");

        await userEvent.click(icon[0]);

        await userEvent.click(icon[1]);

        await userEvent.click(buttonLink[0]!);
        await userEvent.click(buttonLink[1]!);
        await userEvent.click(buttonLink[2]!);

        expect(titleUser).toBeInTheDocument();
        expect(navigate).toHaveBeenCalledWith("/posts/");
      });
    });
  });

  describe("Given component CardPostList", () => {
    describe("When it render componsent and userId equal a id owner", () => {
      test("Then its should show card with titles:'Cristina' delete button", async () => {
        const owner = {
          username: "Cris",
          id: "1",
        };
        renderWithProviders(
          <CardPostList
            owner={owner}
            title={"hola"}
            imagePaths={["", ""]}
            id={"1"}
          />,
          { store: mockStorePostUserLoggued }
        );
        const titleUser = screen.queryByRole("heading", {
          name: "hola",
        });

        const buttonLink = screen.getAllByRole("button");
        const icon = screen.getAllByRole("img");

        await userEvent.click(icon[0]);

        await userEvent.click(icon[1]);

        await userEvent.click(buttonLink[0]!);
        await userEvent.click(buttonLink[1]!);

        expect(icon[0]).toBeInTheDocument();
        expect(titleUser).toBeInTheDocument();
      });
    });
  });
});
