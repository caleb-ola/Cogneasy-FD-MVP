import TeamCard from "../Reusable-components/team_card";

const Team = () => {
  return (
    <section id="team" className="team my-5 pt-3 pb-5">
      <div className="container pb-5">
        <div className="section-header fw-bold text-center my-0 py-0">
          <p className="fs-5 mb-2">OUR TEAM</p>
          <h1 className="my-2 fw-bold">Content Stays Here</h1>
        </div>
        <div className="row  justify-content-center align-items-center text-center">
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4 mt-2">
            {" "}
            <TeamCard
              image={"/images/Team/Oval.png"}
              name={"Jesudamilare Adesegun-David"}
              role={"Content and Partnerships"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4 mt-2">
            {" "}
            <TeamCard
              image={"/images/Team/Oval-1.png"}
              name={"Funto Adesola"}
              role={"Business Development"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4 mt-2">
            {" "}
            <TeamCard
              image={"/images/Team/Oval-2.png"}
              name={"Nathaniel Oboh"}
              role={"Product Development"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
