import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  border-bottom: solid 1px ${(props) => props.theme.colors.primary.base};
  padding: ${(props) => props.theme.padding.big};
  font-size: 1.5rem;
  padding: 20px;
`;
