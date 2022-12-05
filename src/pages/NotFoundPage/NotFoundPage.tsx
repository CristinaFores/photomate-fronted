import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { NotFoundPageStyled, StyledContaint } from "./NotFoundStyled";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <>
      <NotFoundPageStyled>
        <StyledContaint>
          <h1>Algo ha fallado esta pagina no esta disponible</h1>
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
