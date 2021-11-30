import React from "react";
import Footer from "../Reusable-components/footer";
import Navbar from "../Reusable-components/navbar";
import ContactDetails from "./contact_details";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Contact;
