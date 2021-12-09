import React, { useEffect, useState } from "react";
import CourseCard from "../Reusable-components/course_card";

// REDUX
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";

// TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllCourses = () => {
  const dispatch = useDispatch();
  const { Courses } = bindActionCreators(actionCreators, dispatch);
  // const state = useSelector((state) => state.CourseReducer);

  // console.log(state);

  useEffect(() => {
    Courses();
  }, [Courses]);

  // let cous = "";
  // if (state.data) {
  //   cous = state.data.data;
  // }

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const _data = JSON.stringify({
      email,
      fname,
      lname,
      position,
      organization,
    });
    fetch(
      "https://cogneasy-mvp.herokuapp.com/api/v1/subscribers/add-subscriber",
      {
        method: "POST",
        body: _data,
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        toast.success("Your have successfully joined the waiting list.", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) =>
        toast.error("Something went wrong , please try again. Thank you.", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  };

  return (
    <section id="all-courses" className="all-courses my-4 my-md-5 py-md-3">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* MODAL START */}
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        // style={{width:""}}
      >
        <div className="modal-dialog modal-dialog-centered py-4  ">
          <div className="modal-content">
            <div className="modal-header border-0 mt-4">
              <h3 className="modal-title  fw-bold" id="exampleModalLabel">
                Fill in the information below
              </h3>
              <button
                // type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="input-field my-3">
                  <label htmlFor="fname" className="fw-bold py-2">
                    First Name
                    <span className="asteric">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="E.g John"
                    className="name w-100 p-3"
                    onChange={(e) => setFname(e.target.value)}
                    id="fname"
                    required
                  />
                </div>
                <div className="input-field my-3">
                  <label htmlFor="lname" className="fw-bold py-2">
                    Last Name
                    <span className="asteric">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="E.g Doe"
                    className="name w-100 p-3"
                    onChange={(e) => setLname(e.target.value)}
                    id="lname"
                    required
                  />
                </div>
                <div className="input-field my-3">
                  <label htmlFor="email" className="fw-bold py-2">
                    {" "}
                    Email Address
                    <span className="asteric">*</span>
                  </label>
                  <br />
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g johndoe@gmail.com"
                    className="email w-100 p-3"
                    id="email"
                    required
                  />
                </div>

                <div className="input-field my-3">
                  <label htmlFor="position" className="fw-bold py-2">
                    Position
                    <span className="asteric">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="E.g Engineer"
                    className="name w-100 p-3"
                    onChange={(e) => setPosition(e.target.value)}
                    id="position"
                    required
                  />
                </div>
                <div className="input-field my-3">
                  <label htmlFor="organization" className="fw-bold py-2">
                    Organization
                    <span className="asteric">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="E.g Ennovate Lab"
                    className="name w-100 p-3"
                    onChange={(e) => setOrganization(e.target.value)}
                    id="organization"
                    required
                  />
                </div>

                {/* <div className="input-field"></div> */}

                <button
                  type="submit"
                  className="btn course-btn px-3 px-md-5 py-2  my-3 mb-4 shadow-none"
                >
                  Submit
                </button>
              </form>
            </div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* MODAL ENDS */}

      <div className="container">
        <div className="section-header fw-bold text-center">
          <p className="fs-5 mb-2">OUR COURSES</p>
          <h1 className="my-2 fw-bold">Created by the brightest faculty</h1>
        </div>

        <div className="row my-5  align-items-center text-center">
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
              link={"https://youtu.be/1XvPYdyeXFk"}
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
              title={"Complex Problem-Solving"}
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
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <CourseCard
              label={"Coming Soon"}
              image={"/images/course-image.png"}
              title={"Critical Thinking"}
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
