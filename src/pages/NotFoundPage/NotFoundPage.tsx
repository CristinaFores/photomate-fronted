import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import { NotFoundPageStyled, StyledContaint } from "./NotFoundStyled";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <>
      <Header children={<Logo />} />
      <NotFoundPageStyled>
        <StyledContaint>
          <h1>Algo a fallado esta pagina no esta disponible</h1>
          <Button
            text="VOLVER"
            ariaLabel={"VOLVER"}
            styleType="small"
            disabled={false}
            action={navigateHome}
          />
        </StyledContaint>
        <img
          src="../../../img/error404-cristina.png"
          alt="esta pagina no existe"
        />
      </NotFoundPageStyled>
    </>
  );
};

export default NotFoundPage;
