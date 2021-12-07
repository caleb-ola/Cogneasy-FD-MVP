import React, { useEffect } from "react";
import TestimonialCard from "../Reusable-components/testimonial_card";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";

const Testimonial = () => {
  const slider = React.useRef(null);
  const dispatch = useDispatch();
  const { Testimonial } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    Testimonial();
  }, [Testimonial]);
  // const state = useSelector((state) => state.TestimonialReducer);
  // let testi = state;
  // console.log({ testi });

  // if (state.data) {
  //   testi = state.data.data;
  // }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonial" className="testimonial py-5 my-3">
      <div className="container">
        <div className="section-header fw-bold text-center">
          <p className="fs-5 mb-2">TESTIMONIAL</p>
          <h1 className="my-2 fw-bold">What Our Students Say</h1>
        </div>
        {/* {testi.map((item) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
              {" "}
              <TestimonialCard image={item.image} />
            </div>
          );
        })} */}
        <Slider ref={slider} {...settings}>
          <div key={1} className="px-5 my-4">
            <TestimonialCard image={"/images/Ellipse.png"} />
          </div>
          <div key={2} className="px-5 my-4">
            <TestimonialCard image={"/images/Ellipse.png"} />
          </div>
          <div key={3} className="px-5 my-4">
            <TestimonialCard image={"/images/Ellipse.png"} />
          </div>
          <div key={4} className="px-5 my-4">
            <TestimonialCard image={"/images/Ellipse.png"} />
          </div>
          <div key={5} className="px-5 my-4">
            <TestimonialCard image={"/images/Ellipse.png"} />
          </div>
          <div key={6} className="px-5 my-4">
            <TestimonialCard image={"/images/Ellipse.png"} />
          </div>
        </Slider>
        <div className="hero-slider-controls my-3 text-center text-lg-end">
          <i
            className="fas fa-chevron-left p-3 me-3  position-relative"
            data-bs-target="#carouselExampleControls1"
            data-bs-slide="prev"
            onClick={() => slider?.current?.slickPrev()}
          ></i>
          <i
            className="fas fa-chevron-right p-3 ms-3 rounded-circle "
            type="button"
            data-bs-target="#carouselExampleControls1"
            data-bs-slide="next"
            onClick={() => slider?.current?.slickNext()}
          ></i>
        </div>
        {/* <div
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
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
