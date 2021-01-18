import React, { useContext } from "react";
import projects from "../../data/projects";
import { PortfolioWrapper } from "./Portfolio.styles";
import Project from "../Project/Project";
import { darkModeContext } from "../../context/darkModeContext";
export default function Portfolio() {
  let darkMode = useContext(darkModeContext);
  let renderProjects = projects.map((proj, index) => {
    return <Project key={proj.name} project={proj} index={index} />;
  });
  return (
    <PortfolioWrapper id="portfolio" dark={darkMode.darkMode}>
      <h1 className="heading">Portfolio</h1>
      <h4 className="heading-sub">Check what I've been doing lately</h4>
      <div className="project-wrapper">{renderProjects}</div>
    </PortfolioWrapper>
  );
}
