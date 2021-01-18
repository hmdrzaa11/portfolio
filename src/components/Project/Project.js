import React, { useContext } from "react";
import { ProjectWrapper } from "./Project.styles";
import { darkModeContext } from "../../context/darkModeContext";

export default function Project(props) {
  let darkMode = useContext(darkModeContext);
  let { name, description, githubLink, image, stack } = props.project;
  let stackString = stack.join(" - ");

  return (
    <ProjectWrapper index={props.index} dark={darkMode.darkMode}>
      <h1 className="project-heading">{name}</h1>
      <div className="side">
        <div className="left">
          <div className="image-wrapper">
            <img
              className="project-image"
              src={`./images/${image}`}
              alt={name}
            />
          </div>
        </div>
        <div className="right">
          <p className="description">{description}</p>
          <h4 className="stack">{stackString}</h4>
          <div className="cta">
            <a href={githubLink} target="blank" className="github-btn">
              <i className="fab fa-github" /> <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
}
