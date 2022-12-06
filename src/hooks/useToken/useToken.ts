import { useCallback } from "react";
import {
  loginUserActionCreator,
  userLogoutActionCreator,
} from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import decodeToken from "../../utils/decode";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = decodeToken(token);
      dispatch(loginUserActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  const deleteToken = () => {
    localStorage.removeItem("token");
    dispatch(userLogoutActionCreator());
  };

  return { getToken, deleteToken };
};

export default useToken;
