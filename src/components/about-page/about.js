// COMPONENTS
import Footer from "../Reusable-components/footer";
import Navbar from "../Reusable-components/navbar";
import OtherHero from "../Reusable-components/other_hero";
import AboutUs from "./about_us";
import Team from "./team";

const About = () => {
  return (
    <div>
      <Navbar />
      <OtherHero
        header={"We are Africa’s first knowledge exchange platform"}
        image={"/images/hero/Group75.png"}
      />
      <AboutUs />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
