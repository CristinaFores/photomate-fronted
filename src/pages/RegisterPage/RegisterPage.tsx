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
