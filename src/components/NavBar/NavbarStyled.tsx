import styled from "styled-components";

export const NavbarStyled = styled.ul`
  display: flex;
  gap: 1.7;
  margin-bottom: 2rem;
  .icon-navbar {
    width: 36px;
    height: 36px;
    margin: 0 1.3rem;
    display: flex;

    &:hover {
      color: ${(props) => props.theme.colors.primary.base};
    }
  }
`;
