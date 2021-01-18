import styled from "styled-components";

export let DarkModeWrapper = styled.div`
  position: absolute;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: 40rem) {
    left: 50%;
    bottom: 3rem;
    transform: translateX(-50%);
  }
  input {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    position: relative;
    width: 2.5rem;
    height: 1rem;
    background-color: #56bbeb;
    border-radius: 4rem;
    transition: all 0.2s;
    -webkit-box-shadow: inset 5px 5px 5px 0px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: inset 5px 5px 5px 0px rgba(0, 0, 0, 0.39);
    box-shadow: inset 5px 5px 5px 0px rgba(0, 0, 0, 0.39);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 1rem;
      height: 1rem;
      background-color: #e8e8a1;
      border-radius: 50%;
      transition: all 0.2s ease-in;
      -webkit-box-shadow: 5px 4px 5px 0px rgba(0, 0, 0, 0.39);
      -moz-box-shadow: 5px 4px 5px 0px rgba(0, 0, 0, 0.39);
      box-shadow: 5px 4px 5px 0px rgba(0, 0, 0, 0.39);
    }
    &:checked::before {
      left: 1.5rem;
    }
    &:checked {
      background-color: #026695;
    }
  }
`;
