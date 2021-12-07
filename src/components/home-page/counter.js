import React from "react";
import CounterCard from "../Reusable-components/counter_card";

const Counter = () => {
  return (
    <section id="counter" className="counter my-4 my-md-5 py-2">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4 text-center">
            <CounterCard stat={"3500+"} role={"Students"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            <CounterCard stat={"10+"} role={"Courses"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            <CounterCard stat={"5+"} role={"Mentors"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
