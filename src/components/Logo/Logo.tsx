import { Link } from "react-router-dom";
import { LogoStyled } from "./LogoStyled";

const Logo = (): JSX.Element => {
  return (
    <Link to={"/home"}>
      <LogoStyled>Photomate</LogoStyled>
    </Link>
  );
};

export default Logo;
