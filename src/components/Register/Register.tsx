import Button from "../Button/Button";
import Input from "../Input/Input";
import { RegisterStyled, TextSpanStyled } from "./RegisterStyled";

const Register = (): JSX.Element => {
  return (
    <>
      <RegisterStyled>
        <p>Rellena los campos y empieza a compartir tus fotos con tus amigos</p>
        <Input
          type={"text"}
          placeholder={"Nombre"}
          htmlFor={"nombre*"}
          textLabel={"Nombre"}
        />

        <Input
          type={"email"}
          placeholder={"Email"}
          htmlFor={"email"}
          textLabel={"Email*"}
        />

        <Input
          type={"password"}
          placeholder={"Contraseña"}
          htmlFor={"contraseña*"}
          textLabel={"Contraseña"}
        />

        <Button
          text={"Registrase"}
          ariaLabel={"Registrase*"}
          disabled={true}
        ></Button>

        <TextSpanStyled>
          <span>¿Ya tienes una cuenta? </span>
          <a href="/"> Entrar</a>
        </TextSpanStyled>
      </RegisterStyled>
    </>
  );
};

export default Register;
