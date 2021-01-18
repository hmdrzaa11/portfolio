import styled from "styled-components";

export let BioWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1140px) {
    flex-direction: column-reverse;
  }

  h1 {
    font-size: 3rem;
    font-family: "Montserrat Alternates";
    font-weight: bold;
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    color: ${(props) =>
      props.dark
        ? props.theme.darkMode.veryLight
        : props.theme.colors.colorPrimary};
    @media only screen and (max-width: 1220px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 1140px) {
      text-align: center;
    }
    &.slide-right-enter {
      opacity: 0;
      transform: translateX(2rem);
    }
    &.slide-right-enter-active {
      opacity: 1;
      transform: translateX(0);
    }
    &.slide-right-enter-done {
      opacity: 1;
      transform: translateX(0);
    }
  }

  h3 {
    font-size: 1.8rem;
    transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-family: "Montserrat Alternates";
    color: ${(props) =>
      props.dark
        ? props.theme.darkMode.midLight
        : props.theme.colors.colorPrimaryLightest};
    margin-top: -1rem;
    &.slide-left-enter {
      opacity: 0;
      transform: translateX(-2rem);
    }
    &.slide-left-enter-active {
      opacity: 1;
      transform: translateX(0);
    }
    &.slide-left-enter-done {
      opacity: 1;
      transform: translateX(0);
    }
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
  }
  p {
    color: ${(props) =>
      props.dark
        ? props.theme.darkMode.midLight
        : props.theme.colors.colorPrimaryLightest};
    font-weight: 400;
    font-size: 0.9rem;
    margin-top: 2rem;
    @media only screen and (max-width: 1220px) {
      font-size: 0.8rem;
      text-align: center;
    }
  }
`;

export let Detail = styled.div`
  max-width: 30rem;
  margin-right: 4rem;
  @media only screen and (max-width: 1220px) {
    margin-right: 1rem;
  }
`;

export let AvatarSection = styled.div`
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1140px) {
    margin-top: 1rem;
  }
`;

export let ImageWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: #d8d8d8;
  border-radius: 50%;
  position: relative;
  @media only screen and (max-width: 1220px) {
    width: 8rem;
    height: 8rem;
  }
`;

export let Image = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: -0.5rem;
  left: 0.5rem;
  transition: all 0.5s ease-in-out;
  @media only screen and (max-width: 1220px) {
    width: 8rem;
    height: 8rem;
  }
  @media only screen and (max-width: 1140px) {
  }
  &:hover {
    top: -1rem;
    left: 1rem;
  }
`;
