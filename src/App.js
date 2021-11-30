import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// CSS
import "./App.css";

// COOMPONENTS
import Home from "./components/home-page/home";
import About from "./components/about-page/about";
import Acquire from "./components/acquire-skill-page/acquire";
import Contact from "./components/contact-page/contact";
import FindMentor from "./components/find-mentor-page/find_mentor";
import ScrollToTop from "./components/Reusable-components/scrollToTop"; //COMPONENT ENSURES SCROLL BACK TO TOP FUNCTIONALITY ON GETTING TO A NEW PAGE

const App = () => {
  // console.log(props);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="contact" element={<Contact />} />
        <Route path="acquire_a_skill" element={<Acquire />} />
        <Route path="find_a_mentor" element={<FindMentor />} />
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route render={() => <Navigate replace to="/" />} /> */}
        {/* { component: () => <Navigate to="/404" /> } */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
