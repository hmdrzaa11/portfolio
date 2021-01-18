import styled from "styled-components";

export let PassionWrapper = styled.div`
  //360px
  @media only screen and (min-width: 360px) {
    .heading {
      font-size: 2.2rem;
      text-align: center;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .passion-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .passion,
    .languages {
      padding: 2rem 0;
    }
    .languages {
      margin-top: 2rem;
    }
    .passion-list {
      list-style: none;
      padding: 0.4rem 0.8rem;
    }

    .passion-list-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 0.6rem;
      }
      & i {
        color: ${(props) =>
          props.dark
            ? props.theme.darkMode.lightViolet
            : props.theme.colors.colorSecondary};
        font-size: 1rem;
      }
      & span {
        font-size: 0.9rem;
        font-weight: 400;
        color: ${(props) => props.theme.colors.colorPrimaryLightest};
        margin-left: 1rem;
      }
    }
    .language-section {
      display: flex;
      justify-content: center;
    }
    .language-detail {
      margin-right: 1rem;
    }
    .language-title {
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.colorPrimaryLightest};
    }
    .language-subtitle {
      font-size: 0.8rem;
      color: #b7b7b9;
    }
    .progress {
      width: 10rem;
      align-self: center;
    }
    .progress-bar {
      background-color: ${(props) => props.theme.colors.colorPrimaryLightest};
      max-width: 10rem;
      height: 0.5rem;
      border-radius: 5px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        height: 100%;
        width: 80%;
        background-color: ${(props) =>
          props.dark
            ? props.theme.darkMode.lightViolet
            : props.theme.colors.colorSecondary};
      }
    }
  }

  //768px
  @media only screen and (min-width: 768px) {
    .container {
      display: flex;
      justify-content: center;
    }
    .passion {
      margin-right: 5rem;
    }
    .languages {
      margin-top: 0;
    }
  }

  //1000px
  @media only screen and (min-width: 1000px) {
    .heading {
      font-size: 3rem;
      font-family: "Montserrat Alternates";
      font-weight: 700;
      margin-bottom: 5rem;
    }
    .passion-list-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      & i {
        font-size: 1.7rem;
        margin-right: 1rem;
      }
      & span {
        margin-left: 0;
        font-size: 1.1rem;
      }
    }
  }
`;
