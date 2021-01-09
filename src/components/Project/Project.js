import React from "react";
import {
  DescriptionContainer,
  Image,
  ImageContainer,
  ProjectWrapper,
  Description,
  TechStack,
  Stack,
  ProjectName,
} from "./Project.styles";

import { GithubButton } from "../../styles/GlobalStyles";

export default function Project(props) {
  let { name, description, githubLink, image, index, stack } = props.project;
  return (
    <ProjectWrapper>
      <ImageContainer index={index}>
        <Image src={`./images/${image}`} />
      </ImageContainer>
      <DescriptionContainer>
        <ProjectName>{name}</ProjectName>
        <Description>{description}</Description>
        <TechStack>
          <Stack>{stack.join(" - ")}</Stack>
        </TechStack>
        <GithubButton href={githubLink} target="_blank">
          <i className="fab fa-github" /> Source
        </GithubButton>
      </DescriptionContainer>
    </ProjectWrapper>
  );
}
