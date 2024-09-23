import React from 'react';

const TeamMemberCard = ({ name, role, bio, picture }) => {
  return (
    <div className="team-member-card">
        {picture && <img src={picture} alt={name} className="team-member-picture" />} {/* Add image if picture is provided */}
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{bio}</p>
    </div>
  );
};

export default TeamMemberCard;
