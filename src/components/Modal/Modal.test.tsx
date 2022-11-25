import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../mocks/storeMock";
import { hiddenModalActionCreator } from "../../redux/features/uiSlice/uiSlice";

import Modal from "./Modal";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Modal component", () => {
  describe("When it render with a text: Success!, img with text:imagen correct ,and click in the button action", () => {
    test("Then it should  call dispatch with action hiddenModalActionCreator", async () => {
      const expectedModalTitle = "Success!";
      render(<Modal text={expectedModalTitle} isError={false} />);

      const button = screen.getByRole("button", {
        name: "Cerrar Ventana Modal",
      });

      const imgRendder = screen.queryByRole("img", {
        name: "imagen correct",
      });
      await userEvent.click(button!);

      expect(button).toBeInTheDocument();
      expect(imgRendder).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalledWith(hiddenModalActionCreator());
    });
  });

  describe("When it render with a text: Error!, img with text:imagen error ,and click in the button action", () => {
    test("Then it should  call dispatch with action hiddenModalActionCreator", async () => {
      const expectedModalTitle = "Error!";
      renderWithProviders(<Modal text={expectedModalTitle} isError={true} />);

      const button = screen.getByRole("button", {
        name: "Cerrar Ventana Modal",
      });

      const imgRendder = screen.queryByRole("img", {
        name: "imagen error",
      });
      await userEvent.click(button!);

      expect(button).toBeInTheDocument();
      expect(imgRendder).toBeInTheDocument();
    });
  });
});
