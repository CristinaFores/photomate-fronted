import styled from "styled-components";

export const FormStyled = styled.form`
  padding-left: 2.62rem;
  padding-right: 2.62rem;
  margin: 5px;

  @media (min-width: 1000px) {
    padding-left: 5.25rem;
    padding-right: 5.25rem;
  }

  padding-top: 2.625rem;
  padding-bottom: 2.625rem;
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: 0px 1px 4px 0px rgb(0 0 0 / 20%);
  border-radius: 15px;

  p {
    color: ${(props) => props.theme.colors.primary.base};
    text-align: center;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;

export const TextSpanStyled = styled.li`
  color: ${(props) => props.theme.colors.primary.base};
  font-weight: 600;
  text-align: center;
  margin-top: 1.5rem;

  a {
    color: ${(props) => props.theme.colors.button.active};
  }
`;
