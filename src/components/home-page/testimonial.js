import React from "react";
import TestimonialCard from "../Reusable-components/testimonial_card";

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial py-5 my-3">
      <div className="container">
        <div className="section-header fw-bold text-center">
          <p className="fs-5 mb-2">TESTIMONIAL</p>
          <h1 className="my-2 fw-bold">What Our Students Say</h1>
        </div>
        <div
          id="carouselExampleControls1"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="row my-5 justify-content-center align-items-center text-center">
                <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
                  {" "}
                  <TestimonialCard image={"/images/Ellipse.png"} />
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
                  {" "}
                  <TestimonialCard image={"/images/Ellipse.png"} />
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
                  {" "}
                  <TestimonialCard image={"/images/Ellipse.png"} />
                </div>
              </div>
              <div className="hero-slider-controls my-3 text-center text-lg-end">
                <i
                  className="fas fa-chevron-left p-3 me-3  position-relative"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="prev"
                ></i>
                <i
                  className="fas fa-chevron-right p-3 ms-3 rounded-circle "
                  type="button"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="next"
                ></i>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row my-5 justify-content-center align-items-center text-center">
                <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
                  {" "}
                  <TestimonialCard image={"/images/Ellipse.png"} />
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
                  {" "}
                  <TestimonialCard image={"/images/Ellipse.png"} />
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
                  {" "}
                  <TestimonialCard image={"/images/Ellipse.png"} />
                </div>
              </div>
              <div className="hero-slider-controls my-3 text-center text-lg-end">
                <i
                  className="fas fa-chevron-left p-3 me-3  position-relative"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="prev"
                ></i>
                <i
                  className="fas fa-chevron-right p-3 ms-3 rounded-circle "
                  type="button"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="next"
                ></i>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row my-5 justify-content-center align-items-center text-center">
                <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
                  {" "}
                  <TestimonialCard image={"/images/Ellipse.png"} />
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
                  {" "}
                  <TestimonialCard image={"/images/Ellipse.png"} />
                </div>
                <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
                  {" "}
                  <TestimonialCard image={"/images/Ellipse.png"} />
                </div>
              </div>
              <div className="hero-slider-controls my-3 text-center text-lg-end">
                <i
                  className="fas fa-chevron-left p-3 me-3  position-relative"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="prev"
                ></i>
                <i
                  className="fas fa-chevron-right p-3 ms-3 rounded-circle "
                  type="button"
                  data-bs-target="#carouselExampleControls1"
                  data-bs-slide="next"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
