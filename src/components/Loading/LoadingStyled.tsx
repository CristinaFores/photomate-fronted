import styled from "styled-components";
import mainStyleColors from "../../style/themeColors";

export const LoadingStyled = styled.span`
  .loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader::after,
  .loader::before {
    content: "";
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid ${mainStyleColors.primaryColor};
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
  }
  .loader::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
