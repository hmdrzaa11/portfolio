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
        color:${(props) => props.theme.colors.colorPrimary}
    }
`;

export let Container = styled.div`
  padding: 10rem 20rem;
`;

export let HeaderPrimary = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.colorPrimary};
`;
export let HeaderSecondary = styled.h3`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.colorPrimaryLightest};
  margin-top: -1rem;
`;

export let HeaderTertiary = styled(HeaderSecondary)`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 0.8rem;
  color: ${(props) => props.theme.colors.colorPrimary};
`;

export let Paragraph = styled.p`
  color: ${(props) => props.theme.colors.colorPrimaryLightest};
  font-weight: 300;
  font-size: 1.2rem;
  margin-top: 2rem;
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

export default GlobalStyles;
