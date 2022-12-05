import axios from "axios";
import { useCallback } from "react";
import {
  deletePostActionCreator,
  loadOnePostActionCreator,
  loadPostActionCreator,
} from "../../redux/features/postSlice/postSlice";
import { Post } from "../../redux/features/postSlice/types";
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
      const { data } = await axios.get(`${urlApi}/posts/`, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "text/plain",
        },
      });

      const apiResponse = await data.posts;
      dispatch(hiddenLoadingActionCreator());
      dispatch(loadPostActionCreator(apiResponse));
    } catch (error: unknown) {
      dispatch(hiddenLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          text: "No hay ningun post disponible",
        })
      );
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

  const deletePost = useCallback(
    async (id: string) => {
      try {
        const { data } = await axios.delete<Post>(`${urlApi}/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(deletePostActionCreator(data.id));
        showModalActionCreator({
          isError: false,
          text: "La publicacion ha sido eliminada",
        });
      } catch (error: unknown) {
        dispatch(
          showModalActionCreator({
            isError: true,
            text: "No se puede borrar la publicacion",
          })
        );
      }
    },
    [dispatch, token, urlApi]
  );

  const createPost = useCallback(
    async (post: FormData) => {
      dispatch(showLoadingActionCreator());

      try {
        await axios.post(`${urlApi}/posts`, post, {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(hiddenLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            text: "La publicación se ha genereado correctamente",
            isError: false,
          })
        );
      } catch {
        dispatch(hiddenLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            text: "No se ha podido crear la publicacion, intentalo de nuevo más tarde",
            isError: true,
          })
        );
      }
    },
    [dispatch, token, urlApi]
  );
  return { loadPosts, getPostById, deletePost, createPost };
};

export default usePost;
