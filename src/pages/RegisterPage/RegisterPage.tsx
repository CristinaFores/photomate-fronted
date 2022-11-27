import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import Register from "../../components/Register/Register";
import { FormPageStyled } from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <Header children={<Logo />} />
      <FormPageStyled>
        <Register />
      </FormPageStyled>
    </>
  );
};

export default RegisterPage;
