import { useState } from "react";
import { UserCredentials } from "../../hooks/useUser/types";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { FormStyled, TextSpanStyled } from "../Register/RegisterStyled";

const Login = (): JSX.Element => {
  const { loginUser } = useUser();

  const intialFormData: UserCredentials = {
    username: "",
    password: "",
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

    const formDataToSubmit: UserCredentials = {
      username: formData.username,
      password: formData.password,
    };
    await loginUser(formDataToSubmit);
  };
  const isFormEmpty = () => {
    return Object.values(formData).some((data) => data === "");
  };
  return (
    <>
      <FormStyled onSubmit={sendUsers}>
        <Input
          type="text"
          placeholder="Nombre"
          htmlFor="username"
          textLabel="Nombre*"
          onChange={handleInputChange}
          id="username"
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
          text="Registrase"
          ariaLabel="Registrase"
          disabled={isFormEmpty()}
        ></Button>

        <TextSpanStyled>
          <span>¿Ya tienes una cuenta? </span>
          <a href="/"> Registrarse</a>
        </TextSpanStyled>
      </FormStyled>
    </>
  );
};

export default Login;
