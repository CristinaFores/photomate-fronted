import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faHouse, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { NavbarStyled } from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled className="menu">
      <li>
        <NavLink to={"/postId"} aria-label="Nueva publicacion">
          <FontAwesomeIcon className="icon-navbar" icon={faSquarePlus} />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/home"} aria-label="Inicio">
          <FontAwesomeIcon className="icon-navbar" icon={faHouse} />
        </NavLink>
      </li>
      <li>
        <NavLink to={"/perfil"} aria-label="Perfil usuario">
          <FontAwesomeIcon className="icon-navbar" icon={faCircleUser} />
        </NavLink>
      </li>
    </NavbarStyled>
  );
};

export default Navbar;
