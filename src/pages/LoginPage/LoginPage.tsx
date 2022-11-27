import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import Logo from "../../components/Logo/Logo";
import { FormPageStyled } from "../RegisterPage/RegisterPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <Header children={<Logo />} />
      <FormPageStyled>
        <Login />
      </FormPageStyled>
    </>
  );
};

export default LoginPage;
