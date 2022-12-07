import styled from "styled-components";

export const ListPostsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NoResultsStyled = styled.h3`
  color: ${(props) => props.theme.colors.primary.dark};
  font-weight: 2.5rem;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
`;
