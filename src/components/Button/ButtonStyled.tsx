import styled from "styled-components";
import mainStyleColors from "../../style/themeColors";

const ButtonStyled = styled.button`
  font-family: inherit;
  height: 50px;
  border: none;
  width: 100%;
  font-size: 20px;
  color: ${mainStyleColors.secondaryColor};
  border-radius: 6px;
  background-color: ${mainStyleColors.activeColor};

  &:focus,
  :hover {
    cursor: pointer;
    background-color: ${mainStyleColors.primaryColor};
  }

  &:disabled {
    background-color: ${mainStyleColors.disabledColors};
  }
`;

export default ButtonStyled;
