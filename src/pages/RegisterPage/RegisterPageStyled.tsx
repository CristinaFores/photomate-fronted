import styled from "styled-components";

export const FormPageStyled = styled.main`
  display: flex;
  align-content: center;
  flex-direction: column;
  overflow-x: hidden;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  padding-top: 3rem;

  @media (min-width: 1000px) {
    display: flex;
    padding-left: 30rem;
    padding-right: 30rem;
    flex-direction: column;
    align-content: center;
    overflow-x: hidden;
  }
`;
