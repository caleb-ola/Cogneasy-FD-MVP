import React from "react";

const CourseCard = (props) => {
  return (
    <div
      className="card course-card border-0 text-start"
      // style={{ minHeight: "350px", maxHeight: "" }}
    >
      <img
        src={props.image}
        className="card-img-top"
        alt="visual represntation for course"
      />
      <div className="card-body py-3 py-md-4 px-3 px-lg-4">
        {props.label && (
          <small>
            <button className="course-label fw-bold px-3 py-1 mb-2">
              {props.label}
            </button>
          </small>
        )}

        <h3 className="fs-4 w-75 lh-1">{props.title}</h3>
        <a
          href={props.link}
          className="card-text course-card-link  text-decoration-none border-bottom border-3"
        >
          Start Now!
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
