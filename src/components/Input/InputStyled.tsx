import styled from "styled-components";
import mainStyleColors from "../../style/themeColors";

export const InputStyled = styled.input`
  border: none;
  border-bottom: solid 2px ${mainStyleColors.primaryColor};
  width: 100%;
  margin-bottom: 1.8rem;
  margin-top: 1.25px;
  display: block;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${mainStyleColors.primaryColor};
  }
`;
