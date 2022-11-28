import { useState } from "react";
import { Link } from "react-router-dom";
import { RegisterData } from "../../hooks/useUser/types";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { FormStyled, TextSpanStyled } from "./RegisterStyled";

const Register = (): JSX.Element => {
  const { registerUser } = useUser();

  const intialFormData: RegisterData = {
    username: "",
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const sendUsers = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: RegisterData = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };
    await registerUser(formDataToSubmit);
  };
  const isFormEmpty = () => {
    return Object.values(formData).some((data) => data === "");
  };
  return (
    <>
      <FormStyled onSubmit={sendUsers}>
        <p>Rellena los campos y empieza a compartir tus fotos con tus amigos</p>
        <Input
          type="text"
          placeholder="Nombre"
          htmlFor="username"
          textLabel="Nombre*"
          onChange={handleInputChange}
          id="username"
        />

        <Input
          type="email"
          placeholder="Email"
          htmlFor="email"
          textLabel="Email*"
          onChange={handleInputChange}
          id="email"
        />

        <Input
          type="password"
          placeholder="Contraseña"
          htmlFor="password"
          textLabel="Contraseña*"
          onChange={handleInputChange}
          id="password"
        />

        <Button
          styleType="big"
          text="Registrase"
          ariaLabel="Registrase"
          disabled={isFormEmpty()}
        ></Button>

        <TextSpanStyled>
          <span>¿Ya tienes una cuenta? </span>
          <Link to={"/login"}> Entrar</Link>
        </TextSpanStyled>
      </FormStyled>
    </>
  );
};

export default Register;
