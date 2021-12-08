import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact py-5 mb-3 mb-lg-5">
      <div className="container py-5">
        <div className="contact-container py-5 px-5 mx-auto position-relative">
          <div className="">
            <img
              src="/images/shapes/Ellipse14.png"
              alt="abstract shape"
              className="img-fluid position-absolute"
              style={{ left: "0", top: "0" }}
            />
            <img
              src="/images/shapes/Ellipse13.png"
              alt="abstract shape"
              className="img-fluid position-absolute"
              style={{ right: "0", bottom: "0" }}
            />
            <img
              src="/images/shapes/Ellipse15.png"
              alt="abstract shape"
              className="img-fluid position-absolute waves"
              style={{ right: "7%", top: "15%" }}
            />
            <img
              src="/images/shapes/Ellipse15.png"
              alt="abstract shape"
              className="img-fluid position-absolute waves"
              style={{ left: "7%", bottom: "15%" }}
            />
            <img
              src="/images/shapes/Ellipse17.png"
              alt="abstract shape"
              className="img-fluid position-absolute waves"
              style={{ right: "0", top: "0" }}
            />
            <img
              src="/images/shapes/Ellipse18.png"
              alt="abstract shape"
              className="img-fluid position-absolute waves"
              style={{ left: "0", bottom: "0" }}
            />
          </div>
          <div className="section-header fw-bold text-center w-100">
            <h1 className="my-2 fw-bold ">Ready to Start, Click below</h1>
            <p className="fw-normal py-2 my-2 mt-3 w-75 mx-auto text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's. mply dummy text of
              the printing and typeset
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://forms.gle/qiXsKEtpKnQvemJB9"
              className="btn contact-btn shadow-none px-5 py-3 my-3 shadow-none"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
