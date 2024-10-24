
import React from 'react';

const TeamMembers = ({ image, name, position, twitter, facebook, linkedin }) => {
  return (
    <div className="col-md-6 col-lg-3 text-center team mb-4">
      <div className="team-item rounded overflow-hidden mb-2">
        <div className="team-img position-relative">
          <img className="img-fluid" src={image} alt={name} />
          <div className="team-social">
            <a className="btn btn-outline-light btn-square mx-1" href={twitter}><i className="fab fa-twitter"></i></a>
            <a className="btn btn-outline-light btn-square mx-1" href={facebook}><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-outline-light btn-square mx-1" href={linkedin}><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="bg-secondary p-4">
          <h5>{name}</h5>
          <p className="m-0">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
