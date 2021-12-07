import React, { useEffect } from "react";
import MentorCard from "../Reusable-components/mentor_card";

// REDUX
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useDispatch, useSelector } from "react-redux";

const Mentors = () => {
  const dispatch = useDispatch();
  const { Mentors } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state) => state.MentorReducer);
  // console.log({ state: state.data });
  useEffect(() => {
    Mentors();
    // const ment = state.data.data;
  }, [Mentors]);
  let ment = "";
  if (state.data) {
    ment = state.data.data;
  }

  return (
    <section
      id="all-mentors"
      className="all-mentors my-4 px-4 my-md-5 pb-3 pb-md-5"
    >
      <div className="container">
        <div className="section-header fw-bold text-center mt-5">
          <p className="fs-5 mb-2">OUR MENTORS</p>
          <h1 className="my-2 fw-bold">
            Explore our growing catalogue of the finest mentors{" "}
          </h1>
        </div>

        <div className="row my-5">
          {/* {state.data &&
            ment.map((item) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-4 my-4 px-4"
                  key={item._id}
                >
                  <MentorCard
                    name={item.user.name}
                    role={item.discipline}
                    btn={"Mentor Me"}
                    image={item.user.image}
                    bio={item.bio}
                  />
                </div>
              );
            })} */}

          <div className="col-12 col-xl-6 my-4 px-4">
            <MentorCard
              name={"Dare Oduale"}
              role={"Agile/Scrum Master, Great Britain"}
              bio1={
                "Dare Oduale is an Agile Coach with a leading transformation and change management consultancy. He is currently coaching agile teams with a luxury automotive manufacturer. "
              }
              bio2={
                "He has recently facilitated customer experience and agile transformation for 3 different Global Fortune 500 companies in insurance, energy and pharmaceutical.  "
              }
              bio3={
                "Of recent, Dare's work has been centered around transforming ways of working, which includes helping teams adopt and scale Agile; managing delivery of customer engagement products; and service design to exceed customer expectations. "
              }
              btn={"Mentor Me"}
              image={"/images/mentors/dare_oduale.png"}
            />
          </div>
          <div className="col-12 col-xl-6 my-4 px-4">
            <MentorCard
              name={"John Ohakim"}
              role={"Data Analyst, USA"}
              btn={"Mentor Me"}
              bio1={
                "John Ohakim is a data analytics and economic modeling expert. He currently works as a Data Science Consultant at Accenture in the Applied Intelligence practice.             "
              }
              bio2={
                "He has a passion for building predictive models and mining structured and unstructured data to find meaningful insights for clients that drive business value and inform strategy. "
              }
              bio3={
                "Prior to consulting, he worked in the Consumer Packaged Goods industry and in Academia. He received a PhD in Economics from Colorado State University. "
              }
              image={"/images/mentors/john_ohakim.png"}
            />
          </div>
          <div className="col-12 col-xl-6 my-4 px-4">
            <MentorCard
              name={"Samuel Osho"}
              role={"Corporate Communications, Canada"}
              bio1={
                " Sam Osho is a writer, editor, and mechanical engineer. He is the Creative Director of Kreative Diadem, a platform that publishes both young and established writers in the literary art circles. "
              }
              bio2={
                "You can find some of his works on TheCable, Sahara Reporters, YNaija, ScoopNG, The Manitoban, WRRNG amongst many others. He is an alumnus of the University of Ibadan and University of Manitoba.               "
              }
              bio3={
                "Osho has a personal blog where he frequently shares his thoughts on writing, life, creative work, and personal development. You can find him on social media via @iamsamosho "
              }
              btn={"Mentor Me"}
              image={"/images/mentors/samuel_osho.png"}
            />
          </div>
          <div className="col-12 col-xl-6 my-4 px-4">
            <MentorCard
              name={"Dr Tobenna Philips"}
              role={"Research/Cybersecurity, Canada"}
              bio1={
                " Dr Tobenna Philips hold a PhD degree in the synthesis of organic products from Volodymyr Dahl East Ukrainian National UniversityU, kraine. His research topic was focused on innovative technologies for the processing of isopropyl alcohol using the technology of aerosol nanocatalysis. "
              }
              bio2={
                "Prior to attaining his PhD, he did a research-based Master’s degree in catalytic cracking of vacuum gas oil using the technology of aerosol nanocatalysis at the same university."
              }
              bio3={
                "He has authored and co-authored several publications including. The development of new technology for obtaining diisopropyl ether from isopropyl alcohol using the technology of aerosol nanocatalysis."
              }
              btn={"Mentor Me"}
              image={"/images/mentors/tobenna_p.png"}
            />
          </div>
          <div className="col-12 col-xl-6 my-4 px-4">
            <MentorCard
              name={"Chima Omike"}
              role={"Software QA/Renewable Energy, USA"}
              bio1={
                "Chima is a generalist with a career portfolio that spans multiple functional areas including: electronics, software QA & Dev, Artificial Intelligence, renewable energy, manufacturing, sales, management consulting, business strategy & development, and public policy. "
              }
              btn={"Mentor Me"}
              image={"/images/mentors/chima_omike.png"}
            />
          </div>
        </div>
        <div className="section-header fw-bold text-center mt-5 pt-3">
          <h1 className="my-2 fw-bold ">
            Could not find an area of interest?{" "}
          </h1>
        </div>
        <div className="text-center">
          <a
            href="https://forms.gle/dPsBSW4JJLALDrqG9"
            target="_blank"
            rel="noreferrer"
            className="btn course-btn px-4 px-md-5 py-3  shadow-none my-5"
          >
            Join the Waiting List
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
