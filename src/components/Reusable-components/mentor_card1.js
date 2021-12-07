import React from "react";

const MentorCard = (props) => {
  return (
    <div>
      <div className="card mentor-card-one  text-start">
        <div className="card-body py-4 py-md-5 px-3 px-lg-4 text-center">
          <div className="text-center my-3">
            <img
              src={props.image}
              className="card-img-top img-fluid rounded-circle w-25 mx-auto"
              alt="visual represntation for course"
            />
          </div>

          <p className="fs-5 fw-bold m-0 testifier-name">{props.name}</p>
          <p className="fs-6 testifier-role">{props.role}</p>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
