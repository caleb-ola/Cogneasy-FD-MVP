import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CourseCard from "../Reusable-components/course_card";

import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../state";
const Course = () => {
  const dispatch = useDispatch();
  const { Courses } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state) => state.CourseReducer);
  // console.log({ state });
  useEffect(() => {
    Courses();
  }, []);

  let cous = "";
  if (state.data) {
    cous = state.data.data;
  }
  return (
    <section id="course" className="course my-5 py-5">
      <div className="container">
        <div className="section-header fw-bold text-center">
          <p className="fs-5 mb-2">UPSKILL</p>
          <h1 className="my-2 fw-bold">
            Give yourself a clear edge in the world of work.
          </h1>
        </div>

        <div className="row my-5 justify-content-center align-items-center text-center">
          {state.data &&
            cous.map((item) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-4 px-5 my-4"
                  key={item._id}
                >
                  {" "}
                  <CourseCard
                    image={item.image}
                    title={item.title}
                    link={item.link}
                  />
                </div>
              );
            })}
          {/* <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/courses/course2.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/courses/course3.png"} />
          </div> */}
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
