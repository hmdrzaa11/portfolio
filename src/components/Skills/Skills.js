import React from "react";

import {
  SkillWrapper,
  DesignSkills,
  DevSkills,
  SkillsSubHeader,
  SkillSetWrapper,
  Skill,
} from "./Skills.styles";

import { HeaderTertiary } from "../../styles/GlobalStyles";

const skills = [
  "Html",
  "Css",
  "Javascript",
  "Python",
  "Linux",
  "Node",
  "Express",
  "Socket.IO",
  "React",
  "Redux",
  "Git",
  "TypeScript",
  "Redis",
  "MongoDB",
  "mongoose",
  "Postgresql",
  "Sequelize",
  "StyleComponents",
];

export default function Skills() {
  let renderSkills = skills.map((skill) => <Skill key={skill}>{skill}</Skill>);
  return (
    <SkillWrapper>
      <DevSkills>
        <HeaderTertiary>Skills</HeaderTertiary>
        <SkillsSubHeader>Development</SkillsSubHeader>
        <SkillSetWrapper>{renderSkills}</SkillSetWrapper>
      </DevSkills>
      <DesignSkills>
        <HeaderTertiary>Skills</HeaderTertiary>
        <SkillsSubHeader>Design</SkillsSubHeader>
        <SkillSetWrapper>
          <Skill>Figma</Skill>
        </SkillSetWrapper>
      </DesignSkills>
    </SkillWrapper>
  );
}
