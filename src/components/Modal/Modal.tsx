import { hiddenModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";
import { ModalStyled, SpanStyled } from "./ModalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  text: string;
  isError: boolean;
}

const Modal = ({ text, isError }: ModalProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <>
      <ModalStyled>
        <SpanStyled>{isError ? "Ops!" : "Perfecto!"}</SpanStyled>
        <SpanStyled>{text}</SpanStyled>
        <button
          aria-label="Cerrar Ventana Modal"
          onClick={() => {
            dispatch(hiddenModalActionCreator());
          }}
        >
          <FontAwesomeIcon
            aria-label="circle"
            className="circle"
            icon={faCircleXmark}
          />
        </button>

        <SpanStyled>
          {isError ? (
            <img src="../../../img/modal-error.png" alt="imagen error" />
          ) : (
            <img src="../../../img/modal-succes.png" alt="imagen correct" />
          )}
        </SpanStyled>
      </ModalStyled>
    </>
  );
};

export default Modal;
