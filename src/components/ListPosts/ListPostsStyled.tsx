import styled from "styled-components";

export const ListPostsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
  }
`;

export const NoResultsStyled = styled.p`
  color: ${(props) => props.theme.colors.primary.dark};
  font-weight: 2.5rem;
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;
