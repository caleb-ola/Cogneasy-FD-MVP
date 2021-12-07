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
          <div className="col-md-6 col-lg-5 col-sm-12 pe-0 pe-lg-5 ">
            <div className="footer-headers  fw-bold fs-2 py-3 ">
              {" "}
              <Link to="/" className="navbar-brand fw-bold fs-2">
                <img
                  src="/images/logo/Frame.png"
                  alt="Cogneasy's header logo"
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="footer-text w-100 ">
              Remitting Productive Knowledge to Africans on the Continent.
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12">
            <div className="footer-headers fs-5 fw-bold py-4 pb-2 pb-md-3 ">
              Quick Links
            </div>
            <div className="footer-text py-2">
              <Link to="/about" className="footer-link text-decoration-none">
                About Us
              </Link>
            </div>
            <div className="footer-text py-2">
              {" "}
              <Link
                to="/find_a_mentor"
                className="footer-link text-decoration-none"
              >
                Find a Mentor
              </Link>
            </div>
            <div className="footer-text py-2">
              <Link
                to="/acquire_a_skill"
                className="footer-link text-decoration-none"
              >
                Acquire a Skill
              </Link>
            </div>
          </div>
          {/* <div className="col-md-6 col-lg-2 col-sm-12">
            <div className="footer-headers fs-5 fw-bold py-4 pb-2 pb-md-3">
              <a href="/acquire_a_skill" className="text-decoration-none">
                Courses
              </a>
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
          </div> */}
          <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="footer-headers fs-5 fw-bold py-4 pb-2 pb-md-4">
              <a href="/contact" className="text-decoration-none">
                Contact Us
              </a>
            </div>
            <div className="footer-text">
              50, Ogbomoso-Ilorin Rd, General Area, Ogbomoso{" "}
            </div>
            <div className="footer-buttons">
              <div className="row d-inline-block py-3 fs-6 my-3 my-md-4">
                <a
                  href="https://web.facebook.com/officialcogneasy"
                  className="text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fs-4 fa-facebook d-inline mx-1 p-2 p-xl-3 rounded-circle"></i>
                </a>
                <a
                  href="https://www.instagram.com/cogneasy/"
                  className="text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* <div className="social-icon-bg d-inline p-3"> */}
                  <i className="fab fs-4 fa-instagram d-inline mx-1 p-3 rounded-circle"></i>
                  {/* </div> */}
                </a>

                <a
                  href=" https://www.linkedin.com/company/cogneasy/"
                  className="text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i className="fab fs-4 fa-linkedin-in d-inline mx-1 p-2 p-xl-3 rounded-circle"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC3KTjDl-l5tD6GcknkOlkzA"
                  className="text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fs-4 fa-youtube-square d-inline mx-1 p-2 p-xl-3 rounded-circle"></i>
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
