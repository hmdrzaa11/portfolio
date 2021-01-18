import styled from "styled-components";

export let Burger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  right: 4rem;
  display: none;
  @media only screen and (max-width: 40rem) {
    display: block;
  }

  div {
    width: 1.7rem;
    height: 4px;
    background-color: white;
    margin: 4px 0;
    transition: all 0.3s;
  }

  div:nth-child(1) {
    transform: rotate(${({ open }) => (open ? "45deg" : 0)});
    transform-origin: 2px;
  }
  div:nth-child(2) {
    transform: translateX(${({ open }) => (open ? "100%" : 0)});
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
  div:nth-child(3) {
    transform: rotate(${({ open }) => (open ? "-45deg" : 0)});
    transform-origin: 2px;
  }
`;
