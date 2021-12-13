import React, { useEffect, useState } from "react";
import MentorCard from "../Reusable-components/mentor_card";

// REDUX
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useDispatch } from "react-redux";

// TOASTIFY
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mentors = () => {
  const dispatch = useDispatch();
  const { Mentors } = bindActionCreators(actionCreators, dispatch);
  // const state = useSelector((state) => state.MentorReducer);
  // console.log({ state: state.data });
  useEffect(() => {
    Mentors();
    // const ment = state.data.data;
  }, [Mentors]);
  // let ment = "";
  // if (state.data) {
  //   ment = state.data.data;
  // }
  const [name, setName] = useState("");
  const [MentorName, setMentorName] = useState("");
  const [email, setEmail] = useState("");
  const [MentorEmail, setMentorEmail] = useState("");
  const [pitch, setPitch] = useState("");

  const Pass = (name, mail) => {
    setMentorEmail(mail);
    setMentorName(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const _data = JSON.stringify({
      user_name: name,
      user_email: email,
      mentor_email: MentorEmail,
      mentor_name: MentorName,
      pitch: pitch,
    });
    fetch("https://cogneasy-mvp.herokuapp.com/api/v1/users/pitch-to-mentor", {
      method: "POST",
      body: _data,
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        toast.success(
          "Your request to get mentored was submitted successfully. We will reach out to you soon.",
          {
            position: "top-right",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
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
    <section
      id="all-mentors"
      className="all-mentors my-4 px-4 my-md-5 pb-3 pb-md-5"
    >
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
      {/* <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

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
                  <label htmlFor="name" className="fw-bold py-2">
                    Full Name
                    <span className="asteric">*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="E.g John Doe"
                    className="name w-100 p-3"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
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
                  <label htmlFor="text" className="fw-bold py-2">
                    Why do you want to be mentored
                    <span className="asteric">*</span>
                  </label>
                  <br />
                  <textarea
                    type="text"
                    className="w-100 p-3"
                    id=""
                    style={{ height: "200px" }}
                    placeholder="Pitch yourself in 100 words to the mentor"
                    onChange={(e) => setPitch(e.target.value)}
                    required
                  ></textarea>
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
      <div className="container">
        <div className="section-header fw-bold text-center mt-5">
          <p className="fs-5 mb-2">OUR MENTORS</p>
          <h1 className="my-2 fw-bold">
            Explore our growing catalogue of the finest mentors{" "}
          </h1>
        </div>

        <div className="row my-5">
          {/* {state.data &&
            ment.map((item) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-4 my-4 px-4"
                  key={item._id}
                >
                  <MentorCard
                    name={item.user.name}
                    role={item.discipline}
                    btn={"Mentor Me"}
                    image={item.user.image}
                    bio={item.bio}
                  />
                </div>
              );
            })} */}

          <div className="col-12 col-xl-6 my-4 px-1 px-md-4">
            <MentorCard
              name={"Dare Oduale"}
              role={"Agile/Scrum Master, Great Britain"}
              bio1={
                "Dare Oduale is an Agile Coach with a leading transformation and change management consultancy. He is currently coaching agile teams with a luxury automotive manufacturer. "
              }
              bio2={
                "He has recently facilitated customer experience and agile transformation for 3 different Global Fortune 500 companies in insurance, energy and pharmaceutical.  "
              }
              bio3={
                "Of recent, Dare's work has been centered around transforming ways of working, which includes helping teams adopt and scale Agile; managing delivery of customer engagement products; and service design to exceed customer expectations. "
              }
              btn={"Mentor Me"}
              image={"/images/mentors/dare_oduale.png"}
              pass={Pass}
              mail={"dareoduale@gmail.com"}
            />
          </div>
          <div className="col-12 col-xl-6 my-4 px-1 px-md-4">
            <MentorCard
              name={"John Ohakim"}
              role={"Data Analyst, USA"}
              btn={"Mentor Me"}
              bio1={
                "John Ohakim is a data analytics and economic modeling expert. He currently works as a Data Science Consultant at Accenture in the Applied Intelligence practice.             "
              }
              bio2={
                "He has a passion for building predictive models and mining structured and unstructured data to find meaningful insights for clients that drive business value and inform strategy. "
              }
              bio3={
                "Prior to consulting, he worked in the Consumer Packaged Goods industry and in Academia. He received a PhD in Economics from Colorado State University. "
              }
              image={"/images/mentors/john_ohakim.png"}
              pass={Pass}
              mail={"johnohakim@gmail.com"}
            />
          </div>
          <div className="col-12 col-xl-6 my-4 px-1 px-md-4">
            <MentorCard
              name={"Samuel Osho"}
              role={"Corporate Communications, Canada"}
              bio1={
                " Sam Osho is a writer, editor, and mechanical engineer. He is the Creative Director of Kreative Diadem, a platform that publishes both young and established writers in the literary art circles. "
              }
              bio2={
                "You can find some of his works on TheCable, Sahara Reporters, YNaija, ScoopNG, The Manitoban, WRRNG amongst many others. He is an alumnus of the University of Ibadan and University of Manitoba.               "
              }
              bio3={
                "Osho has a personal blog where he frequently shares his thoughts on writing, life, creative work, and personal development. You can find him on social media via @iamsamosho "
              }
              btn={"Mentor Me"}
              image={"/images/mentors/samuel_osho.png"}
              pass={Pass}
              mail={"inisamos@gmail.com"}
            />
          </div>
          <div className="col-12 col-xl-6 my-4 px-1 px-md-4">
            <MentorCard
              name={"Dr Tobenna Philips"}
              role={"Research/Cybersecurity, Canada"}
              bio1={
                " Dr Tobenna Philips hold a PhD degree in the synthesis of organic products from Volodymyr Dahl East Ukrainian National UniversityU, kraine. His research topic was focused on innovative technologies for the processing of isopropyl alcohol using the technology of aerosol nanocatalysis. "
              }
              bio2={
                "Prior to attaining his PhD, he did a research-based Master’s degree in catalytic cracking of vacuum gas oil using the technology of aerosol nanocatalysis at the same university."
              }
              bio3={
                "He has authored and co-authored several publications including. The development of new technology for obtaining diisopropyl ether from isopropyl alcohol using the technology of aerosol nanocatalysis."
              }
              btn={"Mentor Me"}
              image={"/images/mentors/tobenna_p.png"}
              pass={Pass}
              mail={"tcphilips87@icloud.com"}
            />
          </div>
          <div className="col-12 col-xl-6 my-4 px-1 px-md-4">
            <MentorCard
              name={"Chima Omike"}
              role={"Software QA/Renewable Energy, USA"}
              bio1={
                "Chima is a generalist with a career portfolio that spans multiple functional areas including: electronics, software QA & Dev, Artificial Intelligence, renewable energy, manufacturing, sales, management consulting, business strategy & development, and public policy. "
              }
              btn={"Mentor Me"}
              image={"/images/mentors/chima_omike.png"}
              pass={Pass}
              mail={"omikechima@gmail.com"}
            />
          </div>
          <div className="col-12 col-xl-6 my-4 px-1 px-md-4">
            <MentorCard
              name={"Emmanuel O. Adesuyi"}
              role={"Epidemiology/Genomics/Oncology, United Kingdom"}
              bio1={
                "Emmanuel O. Adesuyi was born in Lagos, Nigeria. He received a bachelor degree in nursing science from the Ladoke Akintola University of Technology, Ogbomoso, Nigeria, in 2012, and Master Degree in Public Health, Epidemiology and Infection Control specialty from the same university. He is registered with the nursing and midwifery council of Nigeria as a nurse and midwife. He is also registered with the Nursing and Midwifery Council of the United Kingdom as an adult nurse. "
              }
              bio2={
                "His current research interests includes: Digital education, nursing education, tele-nursing genomics, genetics, oncology, cancer metastasis, and common public health issues. He is currently a doctoral research scholar and nurse educator at the Faculty of Health, Education and Life Science, Birmingham City University, United Kingdom."
              }
              btn={"Mentor Me"}
              image={"/images/mentors/emmanuel.png"}
              pass={Pass}
              mail={"emmanueladesuyi12@gmail.com"}
            />
          </div>
          <div className="col-12 col-xl-6 my-4 px-1 px-md-4">
            <MentorCard
              name={"Adeola Fakolade"}
              role={"Preventive Medicine/Digital Health Solutions, USA"}
              bio1={
                "Adeola Fakolade is a physician, board-certified in General Preventive Medicine/Public Health and Family Medicine with over 10 years of experience caring for a diverse range of patients in the U.S., Nigeria, Ghana and Honduras. During her medical training, she was a member of the Organization of Resident Representatives at the Association of American Medical Colleges, served as chief resident and completed a rotation with the Unites States Preventive Services Task Force."
              }
              bio2={
                "Her work over the years have focused on providing care, medical research, improving healthcare systems, and advocating for the medically underserved. Recently, she has developed an interest in digital health as a tool in the prevention and management of non-communicable diseases especially cancer."
              }
              btn={"Mentor Me"}
              image={"/images/mentors/adekola.png"}
              pass={Pass}
              mail={"adeola.fakolade@gmail.com"}
            />
          </div>
          <div className="col-12 col-xl-6 my-4 px-1 px-md-4">
            <MentorCard
              name={"Cletus Ajibade"}
              role={"Software Engineering/Social Entrepreneurship, USA"}
              bio1={
                "Cletus Ajibade is a technology advocate, social entrepreneur, and software engineer. He is an IBM-powered ACM-ICPC Fellow, Etisalat Scholar, and a 'GES+' Young Innovator in the world honored by President Barack Obama. In 2016, he co-founded SaferMom, an innovative startup leveraging mobile technology to solve the problem of infant and maternal mortality in Nigeria. This service later became Babymigo, an online community for mothers and expecting moms."
              }
              bio2={
                "Cletus is currently a Corporate Operations Manager at Centene Corporation where he uses his technology skills to help transform the health of the community one person at a time. He is a recipient of numerous awards such as the Etisalat Merit Award, the Nigerian Society of Engineers Award, and the NITDA eSolve Award for Indigenous IT solution."
              }
              btn={"Mentor Me"}
              image={"/images/mentors/cletus.png"}
              pass={Pass}
              mail={"cletusajibade@gmail.com"}
            />
          </div>
        </div>
        <div className="section-header fw-bold text-center mt-5 pt-3">
          <h1 className="my-2 fw-bold ">
            Could not find an area of interest?{" "}
          </h1>
        </div>
        <div className="text-center">
          <a
            href="https://forms.gle/dPsBSW4JJLALDrqG9"
            target="_blank"
            rel="noreferrer"
            className="btn course-btn px-3 px-md-4 px-md-5 py-3  shadow-none my-5"
          >
            Join the Waiting List
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
