import React, { useEffect } from "react";
import CourseCard from "../Reusable-components/course_card";

// REDUX
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../state";

const AllCourses = () => {
  const dispatch = useDispatch();
  const { Courses } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state) => state.CourseReducer);

  // console.log(state);

  useEffect(() => {
    Courses();
  }, [Courses]);

  let cous = "";
  if (state.data) {
    cous = state.data.data;
  }

  return (
    <section id="all-courses" className="all-courses my-4 my-md-5 py-md-3">
      <div className="container">
        <div className="section-header fw-bold text-center">
          <p className="fs-5 mb-2">OUR COURSES</p>
          <h1 className="my-2 fw-bold">Created by the brightest faculty</h1>
        </div>

        <div className="row my-5 justify-content-center align-items-center text-center">
          {/* {state.data &&
            cous.map((item) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-4 px-5 my-4"
                  key={item._id}
                >
                  {" "}
                  <CourseCard
                    image={item.image}
                    link={item.link}
                    title={item.title}
                    // label={}
                  />
                </div>
              );
            })} */}

          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              image={"/images/courses/course6.png"}
              title={"Communicate Like A Pro"}
              link={""}
              label={"Available"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              image={"/images/courses/course5.png"}
              title={"Breaking the Einstein Code"}
              link={"https://youtu.be/RY4px-r61xQ"}
              label={"Available"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              image={"/images/courses/course4.png"}
              title={"Mapping Your Business Idea"}
              link={"https://youtu.be/b1skeqtyRPo"}
              label={"Available"}
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              image={"/images/course-image.png"}
              label={"Coming Soon"}
              title={"Creative Thinking Skills"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              image={"/images/course-image.png"}
              label={"Coming Soon"}
              title={"Complex Problem-Solving Skills"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              label={"Coming Soon"}
              image={"/images/course-image.png"}
              title={"Strategic Foresight"}
            />
          </div>
          {/* <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/course-image.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              label={"Coming Soon"}
              image={"/images/course-image.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/course-image.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/course-image.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/course-image.png"} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              label={"Coming Soon"}
              image={"/images/course-image.png"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard image={"/images/course-image.png"} />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
