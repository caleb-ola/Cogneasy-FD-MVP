import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  const [prev, setPrevious] = useState();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    setPrevious();
    return (
      <div
        className="carousel-button-group position-absolute"
        style={{ left: "13%", top: "75%" }}
      >
        {" "}
        {/* // remember to give it position:absolute
          <ButtonOne
            className={currentSlide === 0 ? "disable" : ""}
            onClick={() => previous()}
          />
          <ButtonTwo onClick={() => next()} />
          <ButtonThree onClick={() => goToSlide(currentSlide + 1)}>
            {" "}
            Go to any slide{" "}
          </ButtonThree> */}
        <div className="hero-slider-controls my-3 ">
          <i
            className={"fas fa-chevron-left p-3 me-2 rounded-circle"}
            onClick={() => previous()}
          ></i>
          <i
            class="fas fa-chevron-right p-3 ms-2 rounded-circle"
            onClick={() => next()}
          ></i>
        </div>
      </div>
    );
  };
  // <div className="hero-slider-controls my-3 ">
  //         <i className="fas fa-chevron-left p-3 me-2 rounded-circle"></i>
  //         <i class="fas fa-chevron-right p-3 ms-2 rounded-circle"></i>
  //       </div>

  return (
    <div className="position-relative">
      <img
        src="/images/shapes/topWave.png"
        alt="abstract shape"
        className="img-fluid position-absolute waves"
        style={{ left: "0", top: "61%", zIndex: "-1" }}
      />

      {/* <Carousel responsive={responsive} customButtonGroup={<ButtonGroup />}> */}
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
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
                    <div className="hero-header py-3">
                      <h1 className="fw-bold mb-3 w-100">
                        Get mentored; <br />
                        Get upskilled.
                      </h1>

                      {/* <p className="fs-6 fs-md-5 my-2 w-75 mx-auto mx-md-0 my-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's.
                      </p> */}
                      <a
                        href="/about"
                        className="hero-btn btn px-4 px-md-5 py-3 my-4 mt-3 text-decoration-none shadow-none"
                      >
                        {" "}
                        Learn More
                      </a>
                      <div className="hero-slider-controls my-3">
                        <i
                          className="fas fa-chevron-left p-3 me-3  position-relative"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev"
                        >
                          {/* <span class="visually-hidden">Previous</span> */}
                        </i>
                        <i
                          className="fas fa-chevron-right p-3 ms-3 rounded-circle "
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="carousel-item">
            <section id="hero-section" className="hero-section py-3">
              <div className="container">
                <div className="row align-items-center justify-content-center text-center text-md-start">
                  <div className="col-12 col-md-4 order-sm-2">
                    <img
                      src="/images/hero/Group73.png"
                      alt="hero section visual describing current carousel"
                      className="img-fluid p-5 p-md-0 hero-image w-100"
                    />
                  </div>
                  <div className="col-12 col-md-8 order-sm-1">
                    <div className="hero-header m-0 py-1 py-md-3">
                      <h1 className="fw-bold mb-3 w-100">
                        Explore and connect with mentors across the world
                      </h1>

                      {/* <p className="fs-6 fs-md-5 my-2 w-75 mx-auto mx-md-0 my-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's.
                      </p> */}
                      <a
                        href="/find_a_mentor"
                        className="hero-btn btn px-4 px-md-5 py-3 my-4 mt-3 text-decoration-none shadow-none"
                      >
                        {" "}
                        Find a Mentor
                      </a>

                      <div className="hero-slider-controls my-3">
                        <i
                          className="fas fa-chevron-left p-3 me-3  position-relative"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev"
                        >
                          {/* <span class="visually-hidden">Previous</span> */}
                        </i>
                        <i
                          className="fas fa-chevron-right p-3 ms-3 rounded-circle "
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="carousel-item">
            <section id="hero-section" className="hero-section py-3">
              <div className="container">
                <div className="row align-items-center justify-content-center text-center text-md-start">
                  <div className="col-12 col-md-4 order-sm-2">
                    <img
                      src="/images/hero/Group74.png"
                      alt="hero section visual describing current carousel"
                      className="img-fluid p-5 p-md-0 hero-image w-100"
                    />
                  </div>
                  <div className="col-12 col-md-8 order-sm-1">
                    <div className="hero-header m-0 py-1 py-md-3">
                      <h1 className="fw-bold mb-3 w-100">
                        Acquire cutting-edge skills that gives you an advantage{" "}
                      </h1>

                      {/* <p className="fs-6 fs-md-5 my-2 w-75 mx-auto mx-md-0 my-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's.
                      </p> */}
                      <a
                        href="/acquire_a_skill"
                        className="hero-btn btn px-4 px-md-5 py-3 my-4 mt-3 text-decoration-none shadow-none"
                      >
                        {" "}
                        Start Learning
                      </a>

                      <div className="hero-slider-controls my-3">
                        <i
                          className="fas fa-chevron-left p-3 me-3  position-relative"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="prev"
                        >
                          {/* <span class="visually-hidden">Previous</span> */}
                        </i>
                        <i
                          className="fas fa-chevron-right p-3 ms-3 rounded-circle "
                          type="button"
                          data-bs-target="#carouselExampleControls"
                          data-bs-slide="next"
                        ></i>
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
