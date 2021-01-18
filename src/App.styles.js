import styled from "styled-components";

export let AppWrapper = styled.div`
  background-color: ${(props) => props.dark && props.theme.darkMode.dark};
  color: ${(props) => props.dark && props.theme.darkMode.veryLight};
`;
