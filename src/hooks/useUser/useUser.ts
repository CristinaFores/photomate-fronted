import axios from "axios";
import { useDispatch } from "react-redux";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { RegisterData } from "./types";

const useUser = () => {
  const dispatch = useDispatch();
  const urlApi = process.env.REACT_APP_API_URL;

  const registerUser = async (userRegister: RegisterData) => {
    try {
      await axios.post(`${urlApi}/users/register`, userRegister);

      dispatch(
        showModalActionCreator({
          isError: false,
          text: "Te has registrado correctamente, Por favor inicia sesión",
        })
      );
    } catch (error: unknown) {
      dispatch(
        showModalActionCreator({
          isError: true,
          text: "El usuario ya existe",
        })
      );
    }
  };
  return { registerUser };
};

export default useUser;