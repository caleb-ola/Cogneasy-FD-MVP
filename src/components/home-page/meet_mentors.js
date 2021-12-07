import React from "react";
import { Link } from "react-router-dom";
import MentorCard from "../Reusable-components/mentor_card1";

const MeetMentors = () => {
  return (
    <section id="mentors" className="my-5">
      <div className="container">
        <div className="section-header fw-bold text-center w-100">
          <h1 className="my-2 fw-bold ">Meet Some of Our Mentors </h1>
        </div>
        <div className="row my-5 justify-content-center align-items-center text-center">
          <div className="col-12 col-md-6 col-lg-4 px-5 mt-4 mb-3">
            {" "}
            <MentorCard
              image={"/images/mentors/dare_oduale.png"}
              name={"Dare Oduale"}
              role={"Agile/Scrum Master, Great Britain"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <MentorCard
              image={"/images/mentors/john_ohakim.png"}
              name={"John Ohakim"}
              role={"Data Analyst, USA."}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <MentorCard
              image={"/images/mentors/samuel_osho.png"}
              name={"Sam Osho"}
              role={"Corporate Communications, Canada"}
            />
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/find_a_mentor"
            className="btn course-btn px-4 px-md-5 py-3  shadow-none"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MeetMentors;
