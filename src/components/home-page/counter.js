import React from "react";
import CounterCard from "../Reusable-components/counter_card";

const Counter = () => {
  return (
    <section id="counter" class="counter my-4 my-md-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 px-5 my-3">
            <CounterCard />
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-5 my-3">
            <CounterCard />
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-5 my-3">
            <CounterCard />
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-5 my-3">
            <CounterCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
