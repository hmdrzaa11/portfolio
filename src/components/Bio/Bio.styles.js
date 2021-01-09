import styled, { keyframes } from "styled-components";

export let BioWrapper = styled.div`
  display: flex;
  width: 80rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export let Detail = styled.div`
  max-width: 30rem;
  margin-right: 4rem;
`;

export let AvatarSection = styled.div`
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export let ImageWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: #d8d8d8;
  border-radius: 50%;
  position: relative;
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
  &:hover {
    top: -1rem;
    left: 1rem;
  }
`;

let swing = keyframes`
   0% {
    left: 0;
  }
  50% {
    left: 20px;
  }
  100% {
    left: 0;
  }
`;

export let SwipeButton = styled.div`
  display: inline-block;
  position: relative;
  font-size: 1.4rem;
  margin: 1rem;
  color: ${(props) => props.theme.colors.colorSecondary};
  font-weight: 500;
  animation: ${swing} 2s infinite ease-out;
`;
