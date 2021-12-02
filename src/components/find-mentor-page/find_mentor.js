import React from "react";
import Footer from "../Reusable-components/footer";
import Navbar from "../Reusable-components/navbar";
import OtherHero from "../Reusable-components/other_hero";
import Mentors from "./mentors";

const FindMentor = () => {
  return (
    <div>
      <Navbar />
      <OtherHero
        header={"Need a guide to facilitate your career progress?"}
        image={"/images/hero/Group76.png"}
      />
      <Mentors />
      <Footer />
    </div>
  );
};

export default FindMentor;
