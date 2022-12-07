import styled from "styled-components";

export const NavbarStyled = styled.ul`
  display: flex;
  gap: 1.8;
  margin-bottom: 2rem;
  .icon-navbar {
    width: 40px;
    height: 40px;
    margin: 0 1.5rem;
    display: flex;

    &:hover {
      color: ${(props) => props.theme.colors.primary.base};
    }
  }
`;
