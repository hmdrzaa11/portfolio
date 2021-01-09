import styled from "styled-components";
import { HeaderSecondary } from "../../styles/GlobalStyles";

export let FooterWrapper = styled.div`
  height: 100vh;
  padding: 8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export let FooterHeader = styled(HeaderSecondary)`
  color: ${(props) => props.theme.colors.colorSecondary};
  font-size: 1.8rem;
`;

export let Email = styled.a`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.colorPrimary};
  margin: 2rem 0;
  text-decoration: none;
  background-image: linear-gradient(to right bottom, #9e8cee, #9b62b6);
  padding: 0.4rem 1rem;
  color: white;
  border-radius: 5rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-0.2rem);
  }
`;

export let FooterNav = styled.ul`
  display: flex;
  list-style: none;
`;

export let FooterNavItem = styled.li`
  margin: 1rem;
`;

export let FooterNavLink = styled.a`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid ${(props) => props.theme.colors.colorSecondary};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.colorPrimary};
  transition: all 0.4s ease-in-out;
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.colorSecondary};
  }
`;

export let Copyright = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 4rem;
`;
