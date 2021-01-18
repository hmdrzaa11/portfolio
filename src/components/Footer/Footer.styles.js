import styled from "styled-components";
import { HeaderSecondary } from "../../styles/GlobalStyles";

export let FooterWrapper = styled.div`
  height: 100vh;
  padding: 8rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    color: ${(props) =>
      props.dark
        ? props.theme.darkMode.lightViolet
        : props.theme.colors.colorSecondary};
    font-size: 2rem;
    font-family: "Montserrat Alternates";
    margin-top: -1rem;
    @media only screen and (max-width: 1220px) {
      font-size: 1rem;
    }
    @media only screen and (max-width: 1140px) {
      text-align: center;
      margin: 0.5rem;
    }
    @media only screen and (max-width: 1220px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 400px) {
      font-size: 1.4rem;
    }
  }

  .text-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
  }
  .footer-detail {
    max-width: 40rem;
    text-align: center;
    color: ${(props) =>
      props.dark
        ? props.theme.darkMode.light
        : props.theme.colors.colorPrimaryLightest};
    font-weight: 300;
    font-size: 1.2rem;
    margin-top: 2rem;
    @media only screen and (max-width: 1220px) {
      font-size: 1rem;
    }
    @media only screen and (max-width: 1220px) {
      font-size: 1rem;
    }
  }
`;

export let FooterHeader = styled(HeaderSecondary)`
  color: ${(props) => props.theme.colors.colorSecondary};
  font-size: 1.8rem;
  @media only screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
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

  @media only screen and (max-width: 400px) {
    font-size: 1.1rem;
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
  border: 2px solid
    ${(props) =>
      props.dark
        ? props.theme.darkMode.light
        : props.theme.darkMode.lightViolet};
  border-radius: 50%;
  color: ${(props) =>
    props.dark ? props.theme.darkMode.light : props.theme.colors.colorPrimary};
  transition: all 0.4s ease-in-out;
  i {
    transition: all 0.5s;
  }
  &:hover i {
    color: ${(props) => props.iconColor};
  }
  &:hover {
    color: white;
  }
  @media only screen and (max-width: 400px) {
    font-size: 1rem;
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export let Copyright = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 4rem;
  color: ${(props) => props.theme.colors.colorPrimaryLightest};
  font-family: "Montserrat Alternates";
`;
