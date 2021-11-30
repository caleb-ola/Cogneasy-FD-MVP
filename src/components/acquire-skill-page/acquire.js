import Footer from "../Reusable-components/footer";
import Navbar from "../Reusable-components/navbar";
import OtherHero from "../Reusable-components/other_hero";
import AllCourses from "./courses";

const Acquire = () => {
  return (
    <div>
      <Navbar />
      <OtherHero
        header={
          "Acquire cutting-edge skills that gives an advantage in the workplace"
        }
        image={"/images/hero/Group76.png"}
      />
      <AllCourses />
      <Footer />
    </div>
  );
};

export default Acquire;
