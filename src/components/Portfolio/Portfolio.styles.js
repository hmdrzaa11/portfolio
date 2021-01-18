import styled from "styled-components";

export let PortfolioWrapper = styled.div`
  background-color: ${(props) =>
    props.dark
      ? props.theme.darkMode.dark
      : props.theme.colors.colorSecondaryLight};
  margin-top: 1rem;
  //360px
  @media only screen and (min-width: 360px) {
    & {
      padding: 1rem;
    }
    .heading {
      text-align: center;
      font-family: "Montserrat Alternates";
      font-weight: 500;
      color: ${(props) =>
        props.dark
          ? props.theme.darkMode.lightViolet
          : props.theme.colors.colorSecondary};
      font-size: 1.3rem;
    }
    .heading-sub {
      font-family: "Montserrat Alternates";
      text-align: center;
      font-size: 1rem;
      color: ${(props) =>
        props.dark
          ? props.theme.darkMode.light
          : props.theme.colors.colorPrimaryLight};
      font-weight: 400;
      margin-bottom: 3rem;
    }
  }

  //600
  @media only screen and (min-width: 600px) {
    .heading {
      font-size: 2.6rem;
    }
    .heading-sub {
      font-size: 1.8rem;
    }
  }
  //700
  @media only screen and (min-width: 700px) {
    .heading {
      font-size: 3rem;
    }
    .heading-sub {
      font-size: 2.2rem;
      margin-bottom: 5rem;
    }
  }
`;
