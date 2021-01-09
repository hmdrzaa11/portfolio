import styled from "styled-components";

export let HeaderWrapper = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${(props) => props.imageUrl});
  height: 70vh;
  background-position: center;
  background-size: cover;
`;
