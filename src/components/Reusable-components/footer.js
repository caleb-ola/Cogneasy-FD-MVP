import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5 text-center text-md-start position-relative mt-5">
      <img
        src="/images/shapes/bottomWave.png"
        alt="abstract shape"
        className="img-fluid position-absolute bottom-wave waves"
        // style={{ right: "0", top: "-300%", zIndex: "-1" }}
      />
      <div className="container py-3 py-lg-5">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-sm-12 pe-0 pe-lg-5 ">
            <div className="footer-headers  fw-bold fs-2 py-3 ">Cogneasy</div>
            <div className="footer-text w-100 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-sm-12">
            <div className="footer-headers fs-5 fw-bold py-4 pb-2 pb-md-3 ">
              Quick Links
            </div>
            <div className="footer-text py-2">
              <Link to="" className="footer-link text-decoration-none">
                About Us
              </Link>
            </div>
            <div className="footer-text py-2">
              {" "}
              <Link to="" className="footer-link text-decoration-none">
                Find a Mentor
              </Link>
            </div>
            <div className="footer-text py-2">
              <Link to="" className="footer-link text-decoration-none">
                Acquire a Skill
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-sm-12">
            <div className="footer-headers fs-5 fw-bold py-4 pb-2 pb-md-3">
              Courses
            </div>
            <div className="footer-links">
              <div className="footer-text py-2">
                <Link to="" className="footer-link text-decoration-none">
                  Course 1
                </Link>
              </div>
              <div className="footer-text py-2">
                <Link to="" className="footer-link text-decoration-none">
                  Course 2
                </Link>
              </div>
              <div className="footer-text py-2">
                <Link to="" className="footer-link text-decoration-none">
                  Course 3
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="footer-headers fs-5 fw-bold py-4 pb-2 pb-md-4">
              Contact Us
            </div>
            <div className="footer-text">
              Addres stays here and may take two lines
            </div>
            <div className="footer-buttons">
              <div className="row d-inline-block py-3 fs-6 my-3">
                <a
                  href=""
                  className="text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fs-4 fa-facebook-square d-inline mx-1 p-2 rounded-circle"></i>
                </a>
                <a
                  href=""
                  className="text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fs-4 fa-instagram d-inline mx-1 p-2 rounded-circle"></i>
                </a>
                <a
                  href=""
                  className="text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fs-4 fa-twitter d-inline mx-1 p-2 rounded-circle"></i>
                </a>
                <a
                  href=""
                  className="text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i className="fab fs-4 fa-linkedin d-inline mx-1 p-2 rounded-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
