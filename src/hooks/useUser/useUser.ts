import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  hiddenLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { User } from "../../redux/features/userSlice/types";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import decodeToken from "../../utils/decode";
import { JwtPayloadCustom } from "../../utils/types";
import { RegisterData, UserCredentials } from "./types";

const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      navigate("/login");
    } catch (error: unknown) {
      dispatch(
        showModalActionCreator({
          isError: true,
          text: "El usuario ya existe",
        })
      );
    }
  };

  const loginUser = async (userData: UserCredentials) => {
    try {
      dispatch(showLoadingActionCreator());
      const response = await axios.post(`${urlApi}/users/login`, userData);
      const token = await response.data;

      const tokenPayload: JwtPayloadCustom = decodeToken(token);

      const loggedUser: User = {
        id: tokenPayload.id,
        token: token,
        username: tokenPayload.username,
      };

      dispatch(loginUserActionCreator(loggedUser));
      dispatch(hiddenLoadingActionCreator());
      showModalActionCreator({
        isError: false,
        text: "Sesion iniciada",
      });
      window.localStorage.setItem("token", token);
      return true;
    } catch (error: unknown) {
      dispatch(
        showModalActionCreator({
          isError: true,
          text: "Los datos introducidos son incorrectos",
        })
      );
    }
  };
  return { registerUser, loginUser };
};

export default useUser;
