import { useState } from "react";
import { newPost } from "../../hooks/usePost/types";
import usePost from "../../hooks/usePost/usePost";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { InputLabelStyled } from "../Input/InputStyled";
import { TextSpanStyled } from "../Register/RegisterStyled";
import { CreateNewPostStyled } from "./CreateNewPostStyled";

const CreateNewPost = (): JSX.Element => {
  const { createPost } = usePost();

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
    setFormPost({
      ...formPost,
      [event.target.id]:
        event.target.id === "image"
          ? (event.target as HTMLInputElement).files![0]
          : event.target.value,
    });
  };

  const sendPost = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formPostToSubmit = new FormData();
    formPostToSubmit.append("description", formPost.description);
    formPostToSubmit.append("title", formPost.title);
    formPostToSubmit.append("image", formPost.image!);

    await createPost(formPostToSubmit);
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
          defaultValue="Texto de la publicacion*"
        ></textarea>

        <Input
          type="file"
          placeholder="imagen"
          htmlFor="image"
          textLabel="Imagen*"
          id="image"
          onChange={handleInputChange}
        />
        <Button styleType="big" text="Publicar" ariaLabel="Publicar"></Button>
        <TextSpanStyled>
          <p>Los campos marcados con * son obligatorios</p>
        </TextSpanStyled>
      </CreateNewPostStyled>
    </>
  );
};

export default CreateNewPost;
