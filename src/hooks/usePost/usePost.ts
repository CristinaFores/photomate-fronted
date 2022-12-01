import axios from "axios";
import { useCallback } from "react";
import {
  loadOnePostActionCreator,
  loadPostActionCreator,
} from "../../redux/features/postSlice/postSlice";
import { Post } from "../../redux/features/postSlice/types";
import {
  hiddenLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const usePost = () => {
  const urlApi = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

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

      dispatch(loadPostActionCreator(apiResponse));
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

  const getPostById = useCallback(
    async (id: string) => {
      dispatch(showLoadingActionCreator());

      try {
        const { data } = await axios.get<Post>(`${urlApi}/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(loadOnePostActionCreator(data));
        dispatch(hiddenLoadingActionCreator());
      } catch {
        dispatch(hiddenLoadingActionCreator());

        dispatch(
          showModalActionCreator({
            isError: true,
            text: "No se puede cargar la publicacion",
          })
        );
      }
    },
    [dispatch, token, urlApi]
  );

  return { loadPosts, getPostById };
};

export default usePost;
