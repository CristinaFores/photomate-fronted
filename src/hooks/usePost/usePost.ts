import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const loadPosts = useCallback(
    async ({ search, limit = 2 }: { search?: string; limit?: number }) => {
      try {
        dispatch(showLoadingActionCreator());
        const { data } = await axios.get(`${urlApi}/posts/`, {
          params: {
            title: search,
            limit,
          },
          headers: {
            Authorization: "Bearer " + token,
            "Content-type": "text/plain",
          },
        });

        dispatch(hiddenLoadingActionCreator());
        dispatch(
          loadPostActionCreator({
            posts: data.posts,
            total: data.pagination.total,
          })
        );
      } catch (error: unknown) {
        dispatch(hiddenLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            isError: true,
            text: "No hay ningun post disponible",
          })
        );
      }
    },
    [dispatch, token, urlApi]
  );

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
        await axios.delete<Post>(`${urlApi}/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(deletePostActionCreator(id));
        dispatch(
          showModalActionCreator({
            isError: false,
            text: "La publicacion ha sido eliminada",
          })
        );
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
            text: "La publicaci??n se ha genereado correctamente",
            isError: false,
          })
        );
        navigate("/home");
      } catch {
        dispatch(hiddenLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            text: "No se ha podido crear la publicacion, intentalo de nuevo m??s tarde",
            isError: true,
          })
        );
      }
    },
    [dispatch, navigate, token, urlApi]
  );
  const upddatePost = useCallback(
    async (post: FormData, id: string) => {
      dispatch(showLoadingActionCreator());

      try {
        await axios.patch(`${urlApi}/posts/${id}`, post, {
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(hiddenLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            text: "La publicaci??n se ha actualizado  correctamente",
            isError: false,
          })
        );
        navigate("/home");
      } catch {
        dispatch(hiddenLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            text: "No se ha podido modificar la publicacion, intentalo de nuevo m??s tarde",
            isError: true,
          })
        );
      }
    },
    [dispatch, navigate, token, urlApi]
  );
  return { loadPosts, getPostById, deletePost, createPost, upddatePost };
};

export default usePost;
