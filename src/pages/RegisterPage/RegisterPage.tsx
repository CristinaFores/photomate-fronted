import Logo from "../../components/Logo/Logo";
import { LogoStyled } from "../../components/Logo/LogoStyled";
import Register from "../../components/Register/Register";
import { RegisterPageStyled } from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <RegisterPageStyled>
        <Register />
      </RegisterPageStyled>
    </>
  );
};

export default RegisterPage;
