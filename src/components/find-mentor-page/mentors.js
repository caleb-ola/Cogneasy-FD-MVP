import React from "react";
import MentorCard from "../Reusable-components/mentor_card";

const Mentors = () => {
  return (
    <section
      id="all-mentors"
      className="all-mentors my-4 px-4 my-md-5 pb-3 pb-md-5"
    >
      <div className="container">
        <div className="section-header fw-bold text-center mt-5">
          <p className="fs-5 mb-2">OUR MENTORS</p>
          <h1 className="my-2 fw-bold">Appropiate Content Stays Here</h1>
        </div>
        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Join Waiting List"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Join Waiting List"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Join Waiting List"}
              image={"/images/Ellipse2.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
