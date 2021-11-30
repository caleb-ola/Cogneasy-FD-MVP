import TeamCard from "../Reusable-components/team_card";

const Team = () => {
  return (
    <section id="team" className="team my-5 pb-5">
      <div className="container py-5">
        <div className="section-header fw-bold text-center">
          <p className="fs-5 mb-2">OUR TEAM</p>
          <h1 className="my-2 fw-bold">Content Stays Here</h1>
        </div>
        <div className="row  justify-content-center align-items-center text-center">
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <TeamCard
              image={"/images/Oval.png"}
              name={"Joe Mullaney"}
              role={"Chief Executive Officer"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <TeamCard
              image={"/images/Oval.png"}
              name={"Joe Mullaney"}
              role={"Chief Executive Officer"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 px-5 my-4">
            {" "}
            <TeamCard
              image={"/images/Oval.png"}
              name={"Joe Mullaney"}
              role={"Chief Executive Officer"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
