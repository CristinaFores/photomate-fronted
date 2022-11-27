import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import {
  setLoadingFalseActionCreator,
  setLoadingTrueActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { User } from "../../redux/features/userSlice/types";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import decodeToken from "../../utils/decode";
import { JwtPayloadCustom } from "../../utils/types";
import { RegisterData, UserCredentials } from "./types";

export interface AxiosErrorResponseBody {
  error: string;
}

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

  const loginUser = async (userData: UserCredentials) => {
    dispatch(setLoadingTrueActionCreator());
    try {
      const response = await fetch(`${urlApi}/users/login`, {
        method: "POST",
        body: JSON.stringify({
          username: userData.username,
          password: userData.password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const { token } = await response.json();
      const tokenPayload: JwtPayloadCustom = decodeToken(token);
      const { username, id } = tokenPayload;

      const loggedUser: User = {
        username,
        id,
        token,
      };
      dispatch(setLoadingFalseActionCreator());
      dispatch(loginUserActionCreator(loggedUser));
      window.localStorage.setItem("token", token);
    } catch (error: unknown) {
      dispatch(
        showModalActionCreator({
          isError: true,
          text: (error as AxiosError<AxiosErrorResponseBody>).response?.data
            .error!,
        })
      );
    }
  };
  return { registerUser, loginUser };
};

export default useUser;
