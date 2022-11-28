import styled from "styled-components";

export const NavbarStyled = styled.ul`
  display: flex;

  .icon-navbar {
    width: 40px;
    height: 40px;
    margin: 0 3rem;
    display: flex;
    gap: 3;
    &:hover {
      color: ${(props) => props.theme.colors.primary.base};
    }
  }
`;
