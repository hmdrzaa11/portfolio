import styled from "styled-components";

export let CourseWrapper = styled.div`
  & {
    padding: 0 1rem;
  }
  @media only screen and (min-width: 360px) {
    .heading {
      font-size: 1.1rem;
      text-align: center;
      font-weight: 700;
      margin-bottom: 2.5rem;
      font-family: "Montserrat Alternates";
      color: ${(props) =>
        props.dark
          ? props.theme.darkMode.veryLight
          : props.theme.colors.colorPrimary};
    }
    .courses-list {
      margin-top: 8px;
      list-style: none;
      display: grid;
      grid-template-columns: repeat(1, minmax(20rem, max-content));
      justify-content: center;
    }

    .courses-item {
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
      margin: 6px 0;
      padding: 8px 10px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 4px 5px 2px rgba(0, 0, 0, 0.5);
      z-index: 10;
      transition: all 0.6s;
      background-color: transparent;
      &::before {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        height: 105%;
        width: 100%;
        background-color: ${(props) =>
          props.dark
            ? props.theme.darkMode.lightViolet
            : props.theme.colors.colorSecondary};
        z-index: -1;
        transform: translateX(-98%);
        transition: all 0.5s;
      }
      &:hover::before {
        transform: translateX(0);
      }
      &:hover .courses-link {
        &:visited,
        &:link {
          color: white;
        }
      }
    }
    .courses-link {
      &:visited,
      &:link {
        color: ${(props) =>
          props.dark
            ? props.theme.darkMode.light
            : props.theme.colors.colorPrimary};
      }
    }

    .courses-link {
      text-decoration: none;
      font-size: 11px;
      font-weight: 500;
      &:link,
      &:visited {
        color: ${(props) =>
          props.dark
            ? props.theme.darkMode.light
            : props.theme.colors.colorPrimary};
      }
    }

    @media only screen and (min-width: 375px) {
      .courses-item {
        margin: 4px 0;
        padding: 6px 8px;
      }
    }

    @media only screen and (min-width: 411px) {
      .courses-item {
        margin: 8px 0;
        padding: 6px 8px;
      }
      .courses-link {
        font-size: 0.7rem;
      }
    }
    //768
    @media only screen and (min-width: 768px) {
      .courses-link {
        font-size: 0.8rem;
      }
    }
    //900
    @media only screen and (min-width: 900px) {
      .heading {
        font-size: 1.3rem;
        margin-bottom: 2rem;
      }

      .courses-list {
        display: grid;
        width: auto;
        overflow-y: visible;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 0.8rem;
        column-gap: 1rem;
      }

      .courses-item {
        overflow: hidden;
        position: relative;
        z-index: 10;
        background-color: transparent;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: ${(props) =>
            props.dark
              ? props.theme.darkMode.lightViolet
              : props.theme.colors.colorSecondary};
          z-index: -1;
          transform: translateX(-98%);
          transition: all 0.5s;
        }
        &:hover::before {
          transform: translateX(0);
        }
        &:hover .courses-link {
          &:visited,
          &:link {
            color: white;
          }
        }
      }
      .courses-link {
        &:visited,
        &:link {
          color: ${(props) =>
            props.dark
              ? props.theme.darkMode.light
              : props.theme.colors.colorPrimary};
        }
      }
    }
    //1100
    @media only screen and (min-width: 1100px) {
      .courses-item {
        text-align: center;
        padding-left: 0.9rem;
      }
      .courses-list {
        grid-template-columns: repeat(2, max-content);
        justify-content: center;
      }
    }
    //1360
    @media only screen and (min-width: 1360px) {
      .heading {
        font-size: 1.8rem;
      }

      .courses-link {
        font-size: 1rem;
      }
    }
    & {
      padding: 0 1rem;
    }
  }
`;
