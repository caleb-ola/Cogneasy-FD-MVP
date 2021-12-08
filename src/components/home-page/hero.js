import React from "react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  return (
    <div className="position-relative">
      <img
        src="/images/shapes/topWave.png"
        alt="abstract shape"
        className="img-fluid position-absolute waves"
        style={{ left: "0", top: "61%", zIndex: "-1" }}
      />

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section id="hero-section" className="hero-section py-3">
              <div className="container">
                <div className="row align-items-center justify-content-center text-center text-lg-start">
                  <div className="col-12 col-md-5 order-sm-2">
                    <img
                      src="/images/hero/Group72.png"
                      alt="hero section visual describing current carousel"
                      className="img-fluid p-3 p-md-2 hero-image w-100"
                    />
                  </div>
                  <div className="col-12 col-md-7 order-sm-1 ">
                    <div className="hero-header-home hero-header py-3">
                      <h1 className="fw-bold mb-3 w-100">
                        Get mentored; <br />
                        Get upskilled.
                      </h1>

                      <a
                        href="/about"
                        className="hero-btn btn px-4 px-md-5 py-3 my-4 mt-3 text-decoration-none shadow-none"
                      >
                        {" "}
                        Learn More
                      </a>

                      {/*  */}

                      <div className="icon-cirlce hero-slider-controls m-0 my-3 text-center mx-auto">
                        <ul className=" p-0 text-center text-md-start ">
                          <li
                            className="me-3"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                          >
                            <a href="#">
                              <i className="fas fa-chevron-left fa-lg  position-relative"></i>{" "}
                            </a>
                          </li>
                          <li
                            className="ms-3"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                          >
                            <a href="#">
                              <i
                                className="fas fa-chevron-right fa-lg  rounded-circle "
                                type="button"
                              ></i>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>

                      {/*  */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero-section" className="hero-section py-3">
              <div className="container">
                <div className="row align-items-center justify-content-center text-center text-md-start">
                  <div className="col-12 col-md-5 order-sm-2">
                    <img
                      src="/images/hero/Group73.png"
                      alt="hero section visual describing current carousel"
                      className="img-fluid p-5 p-md-0 hero-image w-100"
                    />
                  </div>
                  <div className="col-12 col-md-7 order-sm-1">
                    <div className="hero-header-home hero-header m-0 py-1 py-md-3">
                      <h1 className="fw-bold mb-3 w-100">
                        Explore and connect with mentors across the world
                      </h1>

                      <a
                        href="/find_a_mentor"
                        className="hero-btn btn px-4 px-md-5 py-3 my-4 mt-3 text-decoration-none shadow-none"
                      >
                        {" "}
                        Find a Mentor
                      </a>

                      <div className="icon-cirlce hero-slider-controls m-0 my-3 mx-auto">
                        <ul className=" p-0 text-center text-md-start">
                          <li
                            className="me-3"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                          >
                            <a href="#">
                              <i className="fas fa-chevron-left fa-lg  position-relative"></i>{" "}
                            </a>
                          </li>
                          <li
                            className="ms-3"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                          >
                            <a href="#">
                              <i
                                className="fas fa-chevron-right fa-lg  rounded-circle "
                                type="button"
                              ></i>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero-section" className="hero-section py-3">
              <div className="container">
                <div className="row align-items-center justify-content-center text-center text-md-start">
                  <div className="col-12 col-md-5 order-sm-2">
                    <img
                      src="/images/hero/Group74.png"
                      alt="hero section visual describing current carousel"
                      className="img-fluid p-5 p-md-0 hero-image w-100"
                    />
                  </div>
                  <div className="col-12 col-md-7 order-sm-1">
                    <div className="hero-header-home hero-header m-0 py-1 py-md-3">
                      <h1 className="fw-bold mb-3 w-100">
                        Acquire cutting-edge skills that gives you an advantage{" "}
                      </h1>

                      <a
                        href="/acquire_a_skill"
                        className="hero-btn btn px-4 px-md-5 py-3 my-4 mt-3 text-decoration-none shadow-none"
                      >
                        {" "}
                        Start Learning
                      </a>

                      <div className="icon-cirlce hero-slider-controls m-0 my-3 mx-auto">
                        <ul className=" p-0  text-center text-md-start">
                          <li
                            className="me-3"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev"
                          >
                            <a href="#">
                              <i className="fas fa-chevron-left fa-lg  position-relative"></i>{" "}
                            </a>
                          </li>
                          <li
                            className="ms-3"
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide="next"
                          >
                            <a href="#">
                              <i
                                className="fas fa-chevron-right fa-lg  rounded-circle "
                                type="button"
                              ></i>{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ======================================================== */}

      {/* </Carousel> */}
    </div>
  );
};

export default Hero;
