import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import Register from "../../components/Register/Register";
import { RegisterPageStyled } from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <Header children={<Logo />} />
      <RegisterPageStyled>
        <Register />
      </RegisterPageStyled>
    </>
  );
};

export default RegisterPage;
