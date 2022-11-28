import Login from "../../components/Login/Login";

import { FormPageStyled } from "../RegisterPage/RegisterPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <FormPageStyled>
        <Login />
      </FormPageStyled>
    </>
  );
};

export default LoginPage;
