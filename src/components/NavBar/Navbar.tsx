import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faHouse, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { NavbarStyled } from "./NavbarStyled";
import Button from "../Button/Button";
import useUser from "../../hooks/useUser/useUser";

const Navbar = (): JSX.Element => {
  const { userLogout } = useUser();
  return (
    <NavbarStyled className="menu">
      <li>
        <NavLink to={"/newpost"} aria-label="Nueva publicacion">
          <FontAwesomeIcon className="icon-navbar" icon={faSquarePlus} />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/home"} aria-label="Inicio">
          <FontAwesomeIcon className="icon-navbar" icon={faHouse} />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/home"} aria-label="Perfil usuario">
          <FontAwesomeIcon className="icon-navbar" icon={faCircleUser} />
        </NavLink>
      </li>
      <li>
        <Button
          ariaLabel={"Cerrar Session"}
          styleType={"smallest"}
          text="Salir "
          action={userLogout}
        ></Button>
      </li>
    </NavbarStyled>
  );
};

export default Navbar;
