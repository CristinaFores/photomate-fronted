import styled, { css } from "styled-components";

interface ButtonStyledProps {
  styleType: "small" | "big";
}

const smallButton = css`
  width: 6rem;
`;
const bigButton = css`
  width: 100%;
`;
const ButtonStyled = styled.button<ButtonStyledProps>`
  font-family: inherit;
  height: 50px;
  border: none;
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
  ${({ styleType }) => styleType === "small" && smallButton}
  ${({ styleType }) => styleType === "big" && bigButton}
`;

export default ButtonStyled;
