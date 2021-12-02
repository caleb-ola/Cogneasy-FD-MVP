import Footer from "../Reusable-components/footer";
import Navbar from "../Reusable-components/navbar";
import OtherHero from "../Reusable-components/other_hero";
import AllCourses from "./courses";

const Acquire = () => {
  return (
    <div>
      <Navbar />
      <OtherHero
        header={"Build globally relevant skills"}
        image={"/images/hero/Group77.png"}
      />
      <AllCourses />
      <Footer />
    </div>
  );
};

export default Acquire;
