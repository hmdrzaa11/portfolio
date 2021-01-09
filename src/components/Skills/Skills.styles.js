import styled from "styled-components";
import { HeaderPrimary } from "../../styles/GlobalStyles";

export let SkillWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export let DevSkills = styled.div``;

export let SkillsHeader = styled(HeaderPrimary)`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export let SkillsSubHeader = styled(SkillsHeader)`
  color: ${(props) => props.theme.colors.colorSecondary};
  font-size: 1rem;
`;

export let SkillSetWrapper = styled.div`
  max-width: 20rem;
`;
export let Skill = styled.p`
  display: inline-block;
  font-size: 1.1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.colorPrimaryLight};
  text-transform: capitalize;
  margin: 0.3rem;
  font-weight: 400;
  padding: 4px 8px;
  transition: all 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.colors.colorSecondary};
    color: white;
  }
`;

export let DesignSkills = styled.div`
  align-self: flex-start;
`;
