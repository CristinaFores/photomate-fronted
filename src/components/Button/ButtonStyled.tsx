import styled, { css } from "styled-components";

interface ButtonStyledProps {
  styleType: "small" | "big" | "smallest";
}

const smallButton = css`
  width: 6rem;
`;
const bigButton = css`
  width: 100%;
`;

const smallestButton = css`
  width: 4rem;
  font-size: 1rem;
  height: 40px;
  border: none;
  font-size: 20px;
  color: #fff;
  border-radius: 6px;
  background-color: rgb(24, 119, 242);
  width: 5rem;
  font-size: 1rem;
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
    ${({ styleType }) => styleType === "smallest" && smallestButton}
`;

export default ButtonStyled;
