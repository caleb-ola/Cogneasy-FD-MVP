import React from "react";
import CourseCard from "../Reusable-components/course_card";

const AllCourses = () => {
  return (
    <section id="all-courses" className="all-courses my-4 my-md-5 py-md-3">
      <div className="container">
        <div className="section-header fw-bold text-center">
          <p className="fs-5 mb-2">OUR COURSES</p>
          <h1 className="my-2 fw-bold">Content Stays Here</h1>
        </div>
        <div className="row my-5 justify-content-center align-items-center text-center">
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/course-image.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              label={"Coming Soon"}
              image={"/images/course-image.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/course-image.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              label={"Coming Soon"}
              image={"/images/course-image.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/course-image.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/course-image.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/course-image.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              label={"Coming Soon"}
              image={"/images/course-image.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/course-image.png"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
