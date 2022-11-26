import { HeaderStyled } from "./HeaderStyled";

interface HeaderProp {
  children?: JSX.Element | JSX.Element[];
}

const Header = ({ children }: HeaderProp): JSX.Element => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

export default Header;
