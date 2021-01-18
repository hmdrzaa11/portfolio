import React, { useContext } from "react";

import { SkillWrapper } from "./Skills.styles";
import { darkModeContext } from "../../context/darkModeContext";

const skills = [
  "Html",
  "Css",
  "Javascript",
  "Linux",
  "Python",
  "Node",
  "Express",
  "React",
  "Redux",
  "TypeScript",
  "Redis",
  "MongoDB",
  "mongoose",
  "Postgresql",
  "Sequelize",
];

export default function Skills() {
  let darkMode = useContext(darkModeContext);
  let renderSkills = skills.map((sk) => (
    <div key={sk} className="skill">
      {sk}
    </div>
  ));
  return (
    <SkillWrapper dark={darkMode.darkMode}>
      <h1 className="heading">Skills</h1>
      <div className="skill-container">
        <div className="development">
          <h3 className="sub-heading">Development</h3>
          <div className="skill-set">{renderSkills}</div>
        </div>
        <div className="design">
          <h3 className="sub-heading">Design</h3>
          <div className="skill-set">
            <div className="skill">Figma</div>
          </div>
        </div>
      </div>
    </SkillWrapper>
  );
}
