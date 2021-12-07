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
  }, []);
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
          {state.data &&
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
            })}

          {/* <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Join Waiting List"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Join Waiting List"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Mentor Me"}
              image={"/images/Ellipse2.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-4 px-4">
            <MentorCard
              name={"Olajide Ajibade"}
              role={"Experience Designer"}
              btn={"Join Waiting List"}
              image={"/images/Ellipse2.png"}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
