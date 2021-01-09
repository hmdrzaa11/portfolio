import styled from "styled-components";
import { HeaderTertiary } from "../../styles/GlobalStyles";
export let PassionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export let PassionSection = styled.div`
  margin-right: 8rem;
`;
export let PassionItem = styled.div`
  margin: 1rem 0;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.colorPrimaryLightest};
  & i {
    margin-right: 0.5rem;
    color: ${(props) => props.theme.colors.colorSecondary};
  }
`;
export let LanguageSection = styled.div``;

export let LanguageWrapper = styled.div``;

export let Language = styled(HeaderTertiary)`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.colorPrimaryLight};
  font-weight: 400;
`;

export let LanguageSubTitle = styled(Language)`
  font-size: 0.8rem;
  margin-top: -0.5rem;
  color: ${(props) => props.theme.colors.colorPrimaryLightest};
`;

export let ProgressBarWrapper = styled.div`
  margin-left: 4rem;
  padding-bottom: 0.5rem;
  align-self: flex-end;
`;
export let ProgressBar = styled.div`
  background-color: #c1c1c1;
  width: 10rem;
  height: 0.6rem;
  border-radius: 5rem;
  position: relative;
`;
export let Progress = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.colorSecondary};
  border-radius: 5rem;
`;
