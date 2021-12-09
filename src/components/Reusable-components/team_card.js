const TeamCard = (props) => {
  return (
    <div className="card team-card border-0 text-center">
      <div className="card-body py-3 py-md-4 px-3 px-lg-4 text-center">
        <div className=" text-center my-3">
          {" "}
          <img
            src={props.image}
            className="card-img-top img-fluid w-75 "
            alt="visual represntation for course"
          />
          <h4 className="fs-4 fw-bold mt-0 mb-0  lh-1 w-100">{props.name}</h4>
          <i>
            <p className="my-1">{props.role}</p>
          </i>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
