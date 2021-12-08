import React from "react";

// COMPONENTS
import Navbar from "../Reusable-components/navbar";
import Hero from "./hero";
import Footer from "../Reusable-components/footer";
import Counter from "./counter";
import Course from "./course";
import Mentors from "./mentors";
// import Testimonial from "./testimonial";
import Contact from "./contact";
import MeetMentors from "./meet_mentors";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Counter />
      <Course />
      <Mentors />
      <MeetMentors />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
