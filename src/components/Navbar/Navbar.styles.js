import styled from "styled-components";

export let Nav = styled.nav`
  width: 100%;
  padding: 0.4rem;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    list-style: none;
    @media only screen and (max-width: 40rem) {
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.95);
      position: fixed;
      top: 0;
      left: ${({ open }) => (open ? 0 : "-100%")};
      height: 100vh;
      width: 100%;
      padding: 3.5rem;
      transition: all 0.6s ease-in-out;
      justify-content: center;
      align-items: center;
    }
  }
  /* fade-enter-done */
  li {
    color: white;
    margin: 0 1rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    font-family: "Montserrat Alternates";
    text-transform: uppercase;

    &.fade-enter {
      opacity: 0;
      transform: translateY(1rem);
    }
    &.fade-enter-active {
      opacity: 1;
      transform: translateY(0);
    }
    &.fade-enter-done {
      opacity: 1;
      transform: translateY(0);
    }
    &:hover {
      color: ${(props) => props.theme.colors.colorSecondary};
    }
    @media only screen and (max-width: 40rem) {
      font-size: 1.3rem;
      margin: 1rem 0;
    }
    &:nth-child(1) {
      transition: transform 1s ease-in-out 0.4s, opacity ease-in-out 1s 0.3s,
        color 0.3s;
      transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    &:nth-child(2) {
      transition: transform 1s ease-in-out 0.5s, opacity ease-in-out 1s 0.6s,
        color 0.3s;
      transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    &:nth-child(3) {
      transition: transform 1s ease-in-out 1s, opacity ease-in-out 1s 0.9s,
        color 0.3s;
      transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  }

  i {
    color: white;
    font-size: 1.4rem;
    position: absolute;
    top: 1.5rem;
    right: 4rem;
    display: none;
    cursor: pointer;
    @media only screen and (max-width: 40rem) {
      display: inline-block;
    }
  }
`;
