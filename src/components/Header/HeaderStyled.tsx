import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: solid 1px ${(props) => props.theme.colors.primary.base};
  padding: ${(props) => props.theme.padding.big};
  @media (min-width: 700px) {
    padding-left: 15rem;
    padding-right: 15rem;
    justify-content: start;
  }
`;
