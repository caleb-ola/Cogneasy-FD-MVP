import React from "react";

const ContactDetails = () => {
  return (
    <section
      id="contact-details"
      className="contact-details py-5 position-relative"
    >
      {/* <img
        src="/images/shapes/topWave.png"
        alt="abstract shape"
        className="img-fluid position-absolute waves"
        style={{ left: "0", top: "5%", zIndex: "-1" }}
      /> */}
      <div className="container">
        <div
          className="hero-header mx-auto pt-4 my-5  text-center"
          style={{ height: "30vh" }}
        >
          <h1 className="fw-bold p-0 my-3 mt-5 pt-5 my-md-2 contact-details-header">
            Contact Us
          </h1>
          {/* <div className=" contact-text ">
            <p className="fs-5 p-0 mx-auto my-1 my-md-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
          </div> */}
        </div>
        <div className="contacts my-5 pt-md-5" style={{ height: "30vh" }}>
          <div className="row text-center pt-2 pt-md-3 justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 my-2">
              <h2 className="fw-bold my-2 my-lg-3">CALL</h2>
              <p className="">+234 816 5619 337</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 my-2">
              <h2 className="fw-bold my-2 my-lg-3">VISIT</h2>
              <p className="">
                50, Ogbomoso Ilorin Road, General Area, Ogbomoso.{" "}
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 my-2">
              <h2 className="fw-bold my-2 my-lg-3">EMAIL</h2>
              <p className="">admin@cogneasy.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
