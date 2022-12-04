import Button from "../Button/Button";
import Input from "../Input/Input";
import { InputLabelStyled } from "../Input/InputStyled";
import { TextSpanStyled } from "../Register/RegisterStyled";
import { CreateNewPostStyled } from "./CreateNewPostStyled";

const CreateNewPost = (): JSX.Element => {
  return (
    <>
      <CreateNewPostStyled>
        <Input
          type="text"
          placeholder="Titulo de la la publicacion"
          htmlFor="Titulo de la la publicacion"
          textLabel="Titulo de la la publicacion*"
          id="Titulo de la la publicacion"
        />

        <InputLabelStyled>"Texto de la publicacion*"</InputLabelStyled>
        <textarea name="" id="">
          Texto de la publicacion*
        </textarea>

        <Input
          type="file"
          placeholder="imagen"
          htmlFor="image"
          textLabel="Imagen*"
          id="imagen"
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
