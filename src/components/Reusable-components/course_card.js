import React from "react";
import { Link } from "react-router-dom";

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
            <button
              className={
                props.label === "Available"
                  ? "course-label fw-bold px-3 py-1 mb-2"
                  : "course-label2 fw-bold px-3 py-1 mb-2"
              }
            >
              {props.label}
            </button>
          </small>
        )}

        <h3 className="fs-4 fw-bold w-75 lh-1">{props.title}</h3>
        {props.label === "Available" ? (
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="card-text course-card-link  text-decoration-none border-bottom border-3"
          >
            Start Now!
          </a>
        ) : (
          <Link
            to=""
            className="card-text course-card-link  text-decoration-none border-bottom border-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            target="_blank"
            rel="noreferrer"
          >
            Join the Waiting List!
          </Link>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
