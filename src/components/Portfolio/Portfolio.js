import React from "react";
import { PortfolioWrapper, ProjectContainer } from "./Portfolio.styles";
import { HeaderPrimary, HeaderSecondary } from "../../styles/GlobalStyles";
import Project from "../Project/Project";
import projects from "../../data/projects";
export default function Portfolio() {
  let projectSections = projects.map((pro, index) => (
    <Project key={pro.name} project={{ ...pro, index }} />
  ));
  return (
    <PortfolioWrapper id="portfolio">
      <HeaderPrimary>Portfolio</HeaderPrimary>
      <HeaderSecondary>Check what I've been doing lately</HeaderSecondary>
      <ProjectContainer>{projectSections}</ProjectContainer>
    </PortfolioWrapper>
  );
}
