import axios from "axios";
import { useCallback } from "react";
import {} from "react-redux";
import { loadPostActionCreator } from "../../redux/features/postSlice/postSlice";
import {
  hiddenLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";

const usePost = () => {
  const urlApi = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("token");

  const loadPosts = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());
      const response = await axios.get(`${urlApi}/posts`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "text/plain",
        },
      });

      const apiResponse = await response.data;

      dispatch(loadPostActionCreator(apiResponse.posts));
    } catch (error: unknown) {
      dispatch(
        showModalActionCreator({
          isError: true,
          text: "No hay ningun post disponible",
        })
      );
    } finally {
      dispatch(hiddenLoadingActionCreator());
    }
  }, [dispatch, token, urlApi]);

  return { loadPosts };
};

export default usePost;
