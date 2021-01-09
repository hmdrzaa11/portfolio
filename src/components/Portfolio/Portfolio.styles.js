import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

export let PortfolioWrapper = styled(Container)`
  background-color: ${(props) => props.theme.colors.colorSecondaryLight};
`;

export let ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
