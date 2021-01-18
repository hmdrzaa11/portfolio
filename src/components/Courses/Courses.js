import React, { useContext } from "react";
import { CourseWrapper } from "./Courses.styles";
import courses from "../../data/coursesData";
import { darkModeContext } from "../../context/darkModeContext";

export default function Courses() {
  let darkMode = useContext(darkModeContext);
  let renderCourses = courses.map((course) => (
    <li className="courses-item" key={course.name}>
      <a className="courses-link" href={course.href} target="blank">
        {course.name}
      </a>
    </li>
  ));
  return (
    <CourseWrapper dark={darkMode.darkMode}>
      <h1 className="heading">I took online courses like :</h1>
      <ul className="courses-list">{renderCourses}</ul>
    </CourseWrapper>
  );
}
