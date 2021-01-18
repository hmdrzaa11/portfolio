import styled from "styled-components";

export let ProjectWrapper = styled.div`
  //360px

  @media only screen and (min-width: 360px) {
    & {
      padding: 0 0.5rem;
      margin: 3rem 0;
    }
    .project-heading {
      text-align: center;
      font-size: 1rem;
      margin-bottom: 0.8rem;
      font-family: "Montserrat Alternates";
    }
    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .project-image {
      display: block;
      margin: 1.5rem auto;
      width: 20rem;
      height: 10rem;
      box-shadow: 0 5px 8px 2px rgba(0, 0, 0, 0.5);
    }
    .description {
      max-width: 15rem;
      margin: 1rem auto;
      font-size: 1rem;
      font-weight: 300;
      text-align: center;
      color: ${(props) =>
        props.dark
          ? props.theme.darkMode.veryLight
          : props.theme.colors.colorPrimaryLight};
    }
    .stack {
      text-align: center;
      font-size: 0.8rem;
      color: ${(props) =>
        props.dark
          ? props.theme.darkMode.light
          : props.theme.colors.colorPrimary};
      margin: 2rem 0;
      font-family: "Montserrat Alternates";
      font-weight: 400;
    }

    .cta {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
    }

    .github-btn {
      &:link,
      &:visited {
        transition: all 0.5s;
        text-decoration: none;
        display: inline-block;
        border: 2px solid
          ${(props) =>
            props.dark
              ? props.theme.darkMode.light
              : props.theme.colors.colorPrimaryLight};
        color: ${(props) =>
          props.dark
            ? props.theme.darkMode.veryLight
            : props.theme.colors.colorPrimary};
        padding: 0.4rem 1.6rem;
        font-size: 0.9rem;
        border-radius: 3rem;
      }

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.5);
      }
      &:active {
        transform: translateY(0);
        box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.5);
      }
    }
  }

  //400px
  @media only screen and (min-width: 400px) {
    .project-image {
      width: 23rem;
      height: 12rem;
    }
  }
  //450
  @media only screen and (min-width: 450px) {
    .project-image {
      width: 27rem;
      height: 16rem;
    }
    .image-wrapper {
      overflow: hidden;
      padding: 0 0.5rem;
    }
    .project-heading {
      font-size: 1.8rem;
      font-weight: 500;
    }
    .stack {
      font-size: 0.8rem;
    }
    .description {
      max-width: 20rem;
    }
  }

  //480px
  @media only screen and (min-width: 480px) {
    .description {
      max-width: 25rem;
    }
    .project-heading {
      font-size: 2.8rem;
    }
  }
  //570
  @media only screen and (min-width: 570px) {
    .project-image {
      width: 31rem;
      height: 20rem;
    }
  }
  //620px
  @media only screen and (min-width: 620px) {
    & {
      margin: 5rem 0;
    }
    .project-image {
      width: 90%;
      height: 35%;
    }
    .description {
      max-width: 85%;
    }
    .stack {
      font-size: 0.9rem;
    }
  }

  //900
  @media only screen and (min-width: 900px) {
    .side {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .left {
      align-self: flex-start;
      margin: 1rem;
      order: ${(props) => props.index % 2 === 0 && 2};
    }
    .right {
      order: ${(props) => props.index % 2 !== 0 && 1};
      margin: 1rem;
    }

    .project-heading {
      font-size: 1.5rem;
    }
    .project-image {
      width: 100%;
      height: 35%;
    }
    .description {
      max-width: 95%;
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
  //1100px
  @media only screen and (min-width: 1100px) {
    .description {
      max-width: 70%;
      font-size: 1rem;
    }
    .project-heading {
      font-size: 2rem;
    }
  }
  //1300px
  @media only screen and (min-width: 1300px) {
    .image-wrapper {
      width: 30rem;
    }
    .right {
      width: 50%;
    }
  }
`;
