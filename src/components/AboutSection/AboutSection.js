import React from "react";
import { Container } from "../../styles/GlobalStyles";
import Bio from "../Bio/Bio";
import Courses from "../Courses/Courses";
import Passion from "../Passions/Passion";
import Skills from "../Skills/Skills";

export default function AboutSection() {
  return (
    <div id="about">
      <Container>
        <Bio />
      </Container>
      <Container>
        <Skills />
      </Container>
      <Container>
        <Passion />
      </Container>
      <Container>
        <Courses />
      </Container>
    </div>
  );
}
