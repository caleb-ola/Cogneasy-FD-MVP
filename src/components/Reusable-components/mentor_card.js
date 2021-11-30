import React from "react";
import { Link } from "react-router-dom";

const MentorCard = (props) => {
  return (
    <div className="card mentor-card border-0 text-start p-3">
      <div className="card-body py-3 py-md-4 px-3 px-lg-4">
        <div className="">
          <div className="row justify-content-center align-items-center align-content-center">
            <div className="col-4">
              <img
                src={props.image}
                className=" "
                alt="visual represntation for course"
              />
            </div>
            <div className="col-8 align-self-center py-3">
              <h5 className="fs-5 fw-bold lh-1 my-2 mentor-name">
                {props.name}
              </h5>
              <p className="lh-1 my-2 mentor-role">{props.role}</p>
            </div>
          </div>
          <p className="my-2 text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's. It is a long
            established fact that a read will be distracted by the readable
            content of a page when looking at its.
          </p>

          <Link
            to=""
            className="card-text course-card-link  text-decoration-none border-bottom border-3 my-3"
          >
            {props.btn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
