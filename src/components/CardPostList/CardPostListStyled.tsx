import styled from "styled-components";

export const CardPostListStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 252px;
  gap: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  .icon-profile {
    font-size: 2rem;
  }
`;

export const ProfileIconStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 1rem 0;
  margin-left: 1rem;
  margin-right: 1rem;

  button {
    border: none;
    background-color: white;
    padding: 0;
  }

  h3 {
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    &:first-of-type {
      gap: 0.3rem;
    }
  }
`;

export const TitelPostyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  margin-left: 1rem;
  margin-right: 1rem;
`;
export const ImgStyled = styled.img`
  object-fit: contain;
`;

export const ContainButtonStyled = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export const ContainIconEditStyled = styled.div`
  display: flex;
  gap: 1.5rem;
  .icon-edit {
    font-size: 2rem;
    &:hover {
      color: ${(props) => props.theme.colors.primary.base};
    }
  }
`;
