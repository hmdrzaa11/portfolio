import React, { useContext, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  AvatarSection,
  BioWrapper,
  Detail,
  Image,
  ImageWrapper,
} from "./Bio.styles";

import avatar from "../../images/avatar.jpg";
import { darkModeContext } from "../../context/darkModeContext";

export default function Bio() {
  let darkMode = useContext(darkModeContext);
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <BioWrapper dark={darkMode.darkMode}>
      <Detail>
        <CSSTransition
          in={mounted}
          classNames="slide-right"
          timeout={1500}
          mountOnEnter
        >
          <h1>Hi, I'm Hamid</h1>
        </CSSTransition>
        <CSSTransition
          in={mounted}
          classNames="slide-left"
          timeout={1500}
          mountOnEnter
        >
          <h3>Backend Developer</h3>
        </CSSTransition>
        <p>
          I’m a self-taught Software Engineer and made the transition from my
          previous career to tech in 2017. I quickly started to love Javascript
          and I took online courses and Because we know the best way to learn is
          to practice, I also did a bunch of personal projects with the
          knowledge I gathered from the courses, I always want to learn more,
          I’m hard working, passionate, committed, and also a fast learner! From
          the beginning days of when I first got into software development up
          until now, I’ve learned and gained a solid understanding of web
          development standards, the importance of reusability/scalability in
          large enterprise applications, and how user experience means
          everything
        </p>
      </Detail>
      <AvatarSection>
        <ImageWrapper>
          <Image src={avatar} alt="avatar" />
        </ImageWrapper>
      </AvatarSection>
    </BioWrapper>
  );
}
