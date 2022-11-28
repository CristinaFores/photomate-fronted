import Register from "../../components/Register/Register";
import { FormPageStyled } from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <FormPageStyled>
        <Register />
      </FormPageStyled>
    </>
  );
};

export default RegisterPage;
