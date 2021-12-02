import React from "react";

const TestimonialCard = (props) => {
  return (
    <div
      className="card testimonial-card  text-start"
      style={{
        maskSize: `url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/stampTiles.svg")`,
        clipPath: `circle("100px at center")`,
      }}
    >
      <div id="borderBottom"></div>
      <div className="card-body py-5 py-md-5 px-3 px-lg-4 text-center">
        <div className="text-center my-3">
          <img
            src={props.image}
            className="card-img-top img-fluid rounded-circle w-25 mx-auto"
            alt="visual represntation for course"
          />
        </div>

        <p className="testimonial-card-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's.
        </p>
        <p className="fs-5 fw-bold m-0 testifier-name">Olajide Ajibade</p>
        <p className="fs-6 testifier-role">Designer</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
