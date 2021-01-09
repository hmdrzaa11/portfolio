import React from "react";
import Bio from "../Bio/Bio";
import { AboutWrapper } from "./About.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skills from "../Skills/Skills";
import Courses from "../Courses/Courses";
import Passion from "../Passions/Passion";

export default function About() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <AboutWrapper id="about">
      <Slider {...settings}>
        <Bio />
        <Skills />
        <Passion />
        <Courses />
      </Slider>
    </AboutWrapper>
  );
}
