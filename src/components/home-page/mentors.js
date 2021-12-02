import React from "react";
import { Link } from "react-router-dom";

const Mentors = () => {
  return (
    <section id="mentors" className="mentors py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <img
              src="/images/mentor.png"
              alt="Visual representation of the mentors section"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="section-header fw-bold text-center text-lg-start w-100">
              <p className="fs-5 my-2">GET MENTORED</p>
              <h1 className="my-2 fw-bold ">
                {" "}
                Find mentors who are the best in your field.
              </h1>
              <p className="text fw-normal py-2 my-2">
                Our mentors are carefully selected from some of the brightest
                and most accomplished Africans in the Diaspora.
              </p>
            </div>
            <div className="text-center text-lg-start">
              <Link
                to="/find_a_mentor"
                className="btn course-btn px-4 px-md-5 py-3 my-3 shadow-none"
              >
                Find a Mentor
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-0 col-xl-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
