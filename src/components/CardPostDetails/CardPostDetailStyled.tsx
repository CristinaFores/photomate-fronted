import styled from "styled-components";

export const CardDetailPostStyled = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  width: 1312px;
  height: 100%;
  top: 217px;
  border-radius: 1rem;
  padding: 2rem;
  gap: 1rem;
  box-shadow: -0px -0px 4px rgb(0 0 0 / 27%);

  h3 {
    font-size: 1.2rem;
  }

  img {
    object-fit: cover;
  }

  .icon-profile {
    font-size: 1.5rem;
  }
`;

export const ProfileIconDetailStyled = styled.div`
  display: flex;
  align-items: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const PostDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
