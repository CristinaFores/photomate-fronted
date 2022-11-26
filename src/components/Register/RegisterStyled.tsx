import styled from "styled-components";
import mainStyleColors from "../../style/themeColors";

export const RegisterStyled = styled.form`
  padding-left: 2.62rem;
  padding-right: 2.62rem;
  margin: 5px;
  @media (min-width: 700px) {
    padding-left: 6.25rem;
    padding-right: 6.25rem;
  }

  padding-top: 2.625rem;
  padding-bottom: 2.625rem;
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  p {
    color: ${mainStyleColors.lightPrimaryColor};
    text-align: center;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;

export const TextSpanStyled = styled.li`
  color: ${mainStyleColors.lightPrimaryColor};
  font-weight: 600;
  text-align: center;
  margin-top: 1.5rem;

  a {
    color: ${mainStyleColors.activeColor};
  }
`;
