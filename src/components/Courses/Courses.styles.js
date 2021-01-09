import styled from "styled-components";
import { HeaderPrimary } from "../../styles/GlobalStyles";

export let CourseWrapper = styled.div`
  padding: 1rem 10rem;
  width: 100%;
`;

export let CourseHeader = styled(HeaderPrimary)`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 0.8rem;
`;

export let CourseList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`;

export let CourseListItem = styled.li`
  flex: 0 0 45%;
  text-align: start;
  padding: 0.8rem 1rem;
  margin: 0.5rem 0.3rem;
  position: relative;
  overflow: hidden;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${(props) => props.theme.colors.colorSecondary};
    transform: translateX(-98%);
    transition: all 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  }

  &:hover::before {
    transform: translateX(0);
  }
  &:hover a {
    color: white;
  }
`;

export let CourseListLink = styled.a`
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.colorPrimaryLightest};
  transition: color 0.8s;
`;
