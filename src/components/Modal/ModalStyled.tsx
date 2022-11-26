import styled from "styled-components";

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 362px;
  height: 392px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-size: 1.5rem;
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
    top: 15px;
    right: 20px;
    font-size: 1rem;
    border: none;
    background-color: transparent;
  }
  img {
    object-fit: 5rem;
  }
`;

export const SpanStyled = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 2rem;
  border-radius: 0.5rem;
`;
