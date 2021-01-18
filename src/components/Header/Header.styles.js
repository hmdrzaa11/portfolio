import styled from "styled-components";

export let HeaderWrapper = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.imageUrl});
  height: 55vh;
  background-position: center;
  background-size: cover;
`;
