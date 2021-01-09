import React from "react";
import {
  CourseHeader,
  CourseList,
  CourseListItem,
  CourseWrapper,
  CourseListLink,
} from "./Courses.styles";
import courses from "../../data/coursesData";

export default function Courses() {
  let coursesItem = courses.map((course) => (
    <CourseListItem key={course.name}>
      <CourseListLink target="blank" href={course.href}>
        {course.name}
      </CourseListLink>{" "}
    </CourseListItem>
  ));
  return (
    <CourseWrapper>
      <CourseHeader>I took online courses like:</CourseHeader>
      <CourseList>{coursesItem}</CourseList>
    </CourseWrapper>
  );
}
