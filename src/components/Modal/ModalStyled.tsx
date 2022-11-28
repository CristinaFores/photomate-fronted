import styled from "styled-components";

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  position: fixed;
  height: 100%;
  top: 50%;
  width: 342px;
  height: 372px;
  transform: translateY(-50%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-size: 1.5rem;

  background-color: ${(props) => props.theme.colors.primary.light};
  z-index: 1;
  .circle {
    font-size: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.primary.base};
    &:focus,
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.primary.dark};
    }
  }
  button {
    position: absolute;
    top: 20px;
    right: 15px;
    font-size: 1rem;
    border: none;
    background-color: transparent;
  }
  img {
    object-fit: 4rem;
  }
`;

export const SpanStyled = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 0.7rem;
  border-radius: 0.5rem;
  text-align: center;
`;
