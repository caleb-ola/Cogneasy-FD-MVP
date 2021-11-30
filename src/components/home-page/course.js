import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../Reusable-components/course_card";

const Course = () => {
  return (
    <section id="course" className="course my-5 py-5">
      <div className="container">
        <div className="section-header fw-bold text-center">
          <p className="fs-5 mb-2">OUR COURSES</p>
          <h1 className="my-2 fw-bold">Appropriate Content Stays Here</h1>
        </div>
        <div className="row my-5 justify-content-center align-items-center text-center">
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/courses/course1.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/courses/course2.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/courses/course3.png"} />
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/acquire_a_skill"
            className="btn course-btn px-4 px-md-5 py-3 my-2 shadow-none"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Course;
