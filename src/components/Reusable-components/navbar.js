import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  // console.log(window.location.pathname);

  const ToggleHamburger = (e) => {
    setHamburger(hamburger ? false : true);
  };
  return (
    <section id="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-2">
            Cogneasy
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <button
            onClick={ToggleHamburger}
            className="navbar-toggler custom-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div
              className={hamburger ? "animated-icon3 open" : "animated-icon3"}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-0 mx-md-4">
                <Link
                  to="/about"
                  className={
                    window.location.pathname === "/about"
                      ? "active nav-link"
                      : "nav-link"
                  }
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-md-4">
                <Link
                  to="/find_a_mentor"
                  className={
                    window.location.pathname === "/find_a_mentor"
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  Find a Mentor
                </Link>
              </li>
              <li className="nav-item mx-0 mx-md-4">
                <Link
                  to="/acquire_a_skill"
                  className={
                    window.location.pathname === "/acquire_a_skill"
                      ? "active nav-link"
                      : "nav-link"
                  }
                  aria-current="page"
                >
                  Acquire a Skill
                </Link>
              </li>
              <li className="nav-item mx-md-4">
                <Link
                  to="/contact"
                  className={
                    window.location.pathname === "/contact"
                      ? "active nav-link"
                      : "nav-link"
                  }
                >
                  Contact us
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
