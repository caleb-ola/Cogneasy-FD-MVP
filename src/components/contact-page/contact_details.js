import React from "react";

const ContactDetails = () => {
  return (
    <section id="contact-details" className="contact-details py-5">
      <div className="container">
        <div
          className="hero-header mx-auto pt-4 my-5  text-center"
          style={{ height: "40vh" }}
        >
          <h1 className="fw-bold p-0 my-3 my-md-2 contact-details-header">
            Contact Us
          </h1>
          <div className=" contact-text ">
            <p className="fs-5 p-0 mx-auto my-1 my-md-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
        </div>
        <div className="contacts my-5 pt-md-5" style={{ height: "40vh" }}>
          <div className="row text-center pt-2 pt-md-3 justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 my-2">
              <h2 className="fw-bold my-2">CALL</h2>
              <p className="">+123 789 8976 786</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 my-2">
              <h2 className="fw-bold my-2">ADDRESS</h2>
              <p className="">
                Your address stays here and may take the entire length
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 my-2">
              <h2 className="fw-bold my-2">EMAIL</h2>
              <p className="">Info@emailaddress.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
