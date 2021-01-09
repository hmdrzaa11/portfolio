import styled, { css } from "styled-components";

export let ScrollButton = styled.button`
  opacity: 0;
  ${(props) => {
    if (props.show) {
      return css`
        opacity: 1;
      `;
    }
  }}
  transition:all .3s ease;
  position: fixed;
  bottom: 4rem;
  right: 1rem;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: none;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.colorSecondary};
  color: white;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    transform: translateY(-0.3rem);
  }
`;
