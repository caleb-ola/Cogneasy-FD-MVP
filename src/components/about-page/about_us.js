const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <div className="row justify-content-center align-items-center">
              <div className="col-6">
                <img
                  src="/images/about/Rectangle26.png"
                  alt="Visual representation of the mentors section"
                  className="img-fluid"
                />
              </div>
              <div className="col-6">
                <img
                  src="/images/about/Rectangle27.png"
                  alt="Visual representation of the mentors section"
                  className="img-fluid"
                />
                <img
                  src="/images/about/Rectangle29.png"
                  alt="Visual representation of the mentors section"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 ">
            <div className="section-header fw-bold text-center text-lg-start w-100">
              <p className="fs-5 my-2">ABOUT US</p>
              <h1 className="my-2 fw-bold w-100 ">
                For Diasporan Africans and Africans on the continent.
              </h1>
              <p className="fw-normal py-2 my-2 text">
                We enable Africans in the diaspora to seamlessly remit
                productive knowledge to Africans on the continent and we help
                young African professionals access the best mentors and course
                content for upskilling and reskilling.
              </p>
            </div>
            {/* <div className="text-center text-lg-start">
              <Link to="" className="btn course-btn px-4 px-md-5 py-3 my-3 ">
                Find a Mentor
              </Link>
            </div> */}
          </div>
          <div className="col-12 col-lg-0 col-xl-1"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
