const OtherHero = (props) => {
  return (
    <section id="hero-section" className="hero-section py-5 position-relative">
      <img
        src="/images/shapes/topWave.png"
        alt="abstract shape"
        className="img-fluid position-absolute waves other-hero-image"
        style={{ left: "0", top: "61%", zIndex: "-1" }}
      />

      <div className="container">
        <div className="row align-items-center justify-content-center text-center text-md-start">
          <div className="col-12 col-md-5 order-md-2">
            <img
              src={props.image}
              alt="hero section visual describing current carousel"
              className="img-fluid p-5"
            />
          </div>
          <div className="col-12 col-md-7 order-md-1">
            <div className="hero-header">
              <h1 className="fw-bold mb-3">{props.header}</h1>

              {/* <p className="fs-6 fs-md-5 my-2 w-75 mx-auto mx-md-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
              <button to="" className="hero-btn btn px-4 px-md-5 py-3 my-3">
                {" "}
                Learn More
              </button>
              <div className="hero-slider-controls my-3">
                <i class="fas fa-chevron-left p-3 me-2 rounded-circle"></i>
                <i class="fas fa-chevron-right p-3 ms-2 rounded-circle"></i>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherHero;
