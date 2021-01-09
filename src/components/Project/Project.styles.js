import styled from "styled-components";
import {
  Paragraph,
  HeaderSecondary,
  HeaderTertiary,
} from "../../styles/GlobalStyles";

export let ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export let ImageContainer = styled.div`
  width: 50rem;
  height: 15rem;
  border-radius: 5px;
  margin: 8rem 2rem;
  order: ${(props) => {
    if (props.index % 2 === 0) {
      return -1;
    } else {
      return 2;
    }
  }};
  overflow: hidden;
  box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.25);
`;

export let Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; ;
`;

export let DescriptionContainer = styled.div``;

export let TechStack = styled.div``;

export let Stack = styled(HeaderSecondary)`
  font-size: 0.8rem;
  margin: 1rem;
  color: ${(props) => props.theme.colors.colorPrimary};
`;

export let Description = styled(Paragraph)`
  width: 20rem;
  font-size: 1rem;
`;

export let ProjectName = styled(HeaderTertiary)`
  display: inline-block;
  background-image: linear-gradient(to right bottom, #d5ceff, #553af6);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
