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
        header={"Explore and connect with mentors across the world"}
        image={"/images/hero/Group76.png"}
      />
      <Mentors />
      <Footer />
    </div>
  );
};

export default FindMentor;
