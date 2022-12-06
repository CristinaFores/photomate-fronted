import { useState } from "react";
import { useParams } from "react-router-dom";
import { newPost } from "../../hooks/usePost/types";
import usePost from "../../hooks/usePost/usePost";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { InputLabelStyled } from "../Input/InputStyled";
import { TextSpanStyled } from "../Register/RegisterStyled";
import { CreateNewPostStyled } from "./CreateNewPostStyled";

interface CreateNewPostProps {
  isEditMode?: boolean;
}

const CreateNewPost = ({
  isEditMode = false,
}: CreateNewPostProps): JSX.Element => {
  const { id } = useParams();

  const { createPost, upddatePost } = usePost();

  const initialCreatePost: newPost = {
    description: "",
    image: {} as File,
    title: "",
  };

  const [formPost, setFormPost] = useState(initialCreatePost);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.id === "image") {
      const input = event.target as HTMLInputElement;
      const files = input.files as FileList;
      setFormPost({
        ...formPost,
        [event.target.id]: files[0],
      });
      return;
    }
    setFormPost({
      ...formPost,
      [event.target.id]: event.target.value,
    });
  };

  const sendPost = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formPostToSubmit = new FormData();
    formPostToSubmit.append("description", formPost.description);
    formPostToSubmit.append("title", formPost.title);
    formPostToSubmit.append("image", formPost.image!);

    if (!isEditMode) {
      await createPost(formPostToSubmit);
      return;
    }

    await upddatePost(formPostToSubmit, id!);
  };

  return (
    <>
      <CreateNewPostStyled onSubmit={sendPost}>
        <Input
          type="text"
          placeholder="Titulo de la la publicacion"
          htmlFor="title"
          textLabel="Titulo de la la publicacion*"
          id="title"
          onChange={handleInputChange}
        />
        <InputLabelStyled htmlFor="description">
          Texto de la publicacion
        </InputLabelStyled>
        <textarea
          id="description"
          onChange={handleInputChange}
          defaultValue=""
        ></textarea>

        <Input
          type="file"
          placeholder="imagen"
          htmlFor="image"
          textLabel="Imagen*"
          id="image"
          onChange={handleInputChange}
        />
        {isEditMode ? (
          <Button
            styleType="big"
            text="Modificar"
            ariaLabel="Modificar"
          ></Button>
        ) : (
          <Button styleType="big" text="Publicar" ariaLabel="Publicar"></Button>
        )}
        <TextSpanStyled>
          <p>Los campos marcados con * son obligatorios</p>
        </TextSpanStyled>
      </CreateNewPostStyled>
    </>
  );
};

export default CreateNewPost;
