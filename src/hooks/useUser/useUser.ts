import axios from "axios";
import { useDispatch } from "react-redux";
import { showModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import decodeToken from "../../utils/decode";
import { JwtPayloadCustom } from "../../utils/types";
import { RegisterData, UserCredentials } from "./types";

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
    const userLogger: JwtPayloadCustom = decodeToken(token);

    dispatch(
      loginUserActionCreator({
        ...userLogger,
        username: userData.username,
        token: token,
      })
    );

    localStorage.setItem("token", token);
  };
  return { registerUser, loginUser };
};

export default useUser;
