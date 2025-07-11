import React from "react";
import "./BasicCourse.css";

const BasicCourse = ({ course }) => (
  <section className="info-box">
    <h2>기본 여행 코스</h2>
    <ol className="basic-course-list">
      {course.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ol>
  </section>
);

export default BasicCourse;
