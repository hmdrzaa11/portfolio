import styled from "styled-components";

export let SkillWrapper = styled.div`
  //360px
  @media only screen and (min-width: 360px) {
    .heading {
      text-align: center;
      font-family: "Montserrat Alternates";
      font-size: 1.6rem;
      color: ${(props) =>
        props.dark
          ? props.theme.darkMode.veryLight
          : props.theme.colors.colorPrimaryLight};
    }
    .sub-heading {
      font-family: "Montserrat Alternates";
      color: ${(props) =>
        props.dark
          ? props.theme.darkMode.lightViolet
          : props.theme.colors.colorSecondary};
      font-size: 1.1rem;
      text-align: center;
    }

    .skill-set {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0.4rem 0.8rem;
      justify-content: center;
      margin: 1rem auto;
      column-gap: 0.4rem;
    }
    .development {
      margin-top: 0.8rem;
      margin-bottom: 1.1rem;
    }
    .skill {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: 700;
      margin: 0.3rem;
      padding: 0.3rem 1.5rem;
      transform: all 0.6s;
      color: ${(props) => props.theme.colors.colorPrimaryLightest};
      border-radius: 3px 3px 0 0;
      cursor: pointer;
      border-bottom: 1px solid
        ${(props) => props.theme.colors.colorPrimaryLight};

      &:hover {
        color: white;
        background-color: ${(props) => props.theme.colors.colorSecondary};
        border-color: ${(props) => props.theme.colors.colorSecondary};
        border-radius: 3px 3px 3px 3px;
      }
    }
  }
  //488px
  @media only screen and (min-width: 488px) {
    .development,
    .design {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  //580px
  @media only screen and (min-width: 488px) {
    .heading {
      font-size: 2rem;
    }
    .sub-heading {
      font-size: 1.3rem;
    }
    .skill {
      font-size: 1.1rem;
    }
  }

  //768px
  @media only screen and (min-width: 768px) {
    .skill-container {
      display: flex;
      justify-content: space-around;
      margin-top: 2rem;
    }

    .development {
      margin-top: 0;
    }

    .design {
      align-self: flex-start;
    }
  }

  //800px
  @media only screen and (min-width: 800px) {
    .heading {
      font-size: 3rem;
    }
    .sub-heading {
      font-size: 1.9rem;
    }
    .skill {
      font-size: 1rem;
    }
  }
  //900px

  @media only screen and (min-width: 900px) {
    .skill-set {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
