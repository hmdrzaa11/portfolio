import styled from "styled-components";

export let Nav = styled.nav`
  background-color: ${(props) =>
    props.active ? "white" : "rgba(0, 0, 0, 0.9)"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
`;

export let NavList = styled.ul`
  list-style: none;
  display: flex;
`;

export let NavItem = styled.li`
  margin: 0 0.5rem;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.colorSecondary};
  }
  @media only screen and (max-width: 40rem) {
    visibility: hidden;
  }
`;

export let HamburgerMenu = styled.i`
  color: white;
  font-size: 1.4rem;
  position: absolute;
  top: 2rem;
  right: 4rem;
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 40rem) {
    display: block;
  }
`;

export let Sidebar = styled.div`
  font-size: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: tomato;
  width: 100%;
  transform: translateX(${(props) => (props.show ? 0 : "-100%")});
  transition: all 0.7s ease-in-out;
`;
