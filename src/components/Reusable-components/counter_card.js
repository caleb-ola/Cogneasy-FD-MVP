import React from "react";

const CounterCard = (props) => {
  return (
    <div
      className="counter-card text-center py-4 px-3 mx-auto"
      style={{ width: "15rem" }}
    >
      <h2 className="fw-bold mt-2 py-1">{props.stat}</h2>
      <p className="mb-2 py-1"> {props.role}</p>
    </div>
  );
};

export default CounterCard;
