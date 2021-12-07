import React from "react";
import { Link } from "react-router-dom";

const MentorCard = (props) => {
  return (
    <div className="card mentor-card border-0 text-start p-3">
      <div className="card-body py-3 py-md-4 px-3 px-lg-4 position-relative">
        <div className="">
          <div className="row justify-content-center align-items-center align-content-center my-3">
            <div className="col-4">
              <img
                src={props.image}
                className=""
                alt="visual represntation for course"
              />
            </div>
            <div className="col-8 align-self-center py-3">
              <h3 className="fs-3 fw-bold lh-1 my-2 mentor-name">
                {props.name}
              </h3>
              <p className="lh-1 my-2 mentor-role">{props.role}</p>
            </div>
          </div>
          <div className=" my-3">
            <p className="my-2 text">{props.bio1}</p>
            <p className="my-2 text">{props.bio2}</p>
            <p className="my-2 mb-3 text">{props.bio3}</p>
          </div>

          <Link
            to=""
            className="card-text fw-bold course-card-link  text-decoration-none border-bottom border-3 my-3 position-absolute"
            style={{ left: "5%", bottom: "3%" }}
          >
            {props.btn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
