import styled, { createGlobalStyle } from "styled-components";

let GlobalStyles = createGlobalStyle`

    *,*::before,*::after{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    body{
        font-size:62.5%;
        font-family:"Roboto",sans-serif;
        font-weight:300;
        line-height:1.7;
        color:${(props) => props.theme.colors.colorPrimary};
        
    }
`;

export let HeaderSecondary = styled.h3`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.colorPrimaryLightest};
  margin-top: -1rem;
  @media only screen and (max-width: 1220px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 1140px) {
    text-align: center;
    margin: 0.5rem;
  }
  @media only screen and (max-width: 1220px) {
    font-size: 0.9rem;
  }
`;

export let Paragraph = styled.p`
  color: ${(props) => props.theme.colors.colorPrimaryLightest};
  font-weight: 300;
  font-size: 1.2rem;
  margin-top: 2rem;
  @media only screen and (max-width: 1220px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 1220px) {
    font-size: 0.8rem;
  }
`;

export let GithubButton = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.colorPrimary};
  border: 1px solid ${(props) => props.theme.colorPrimary};
  padding: 0.4rem 0.9rem;
  margin: 1rem;
  border-radius: 5rem;
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  & i {
    margin-right: 0.4rem;
  }
  &:hover {
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.4);
    transform: translateY(-3px);
  }
  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }
`;

export let Container = styled.div`
  padding: 5rem 8rem;
  margin: 8rem 0;
  @media only screen and (min-width: 360px) {
    padding: 3rem 2rem;
    margin: 3rem 0;
  }
`;

export default GlobalStyles;
