import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: inherit;
  height: 50px;
  border: none;
  width: 100%;
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary.light};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.button.active};

  &:focus,
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.button.disable};
  }
`;

export default ButtonStyled;
