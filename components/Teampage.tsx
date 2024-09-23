import React, { useState } from 'react';

import TeamMemberCard from './TeamMemberCard';

const TeamPage = () => {
  const [teamMembers] = useState([
    {
      picture: '/images/menno.jpg',
      name: 'Menno Drescher',
      role: 'Founder',
      bio: 'Menno Drescher is the visionary founder of CBA Consult, with a passion for innovation and excellence.',
    },
  ]);

  return (
    <div>
      {teamMembers.map((member, index) => (
        <TeamMemberCard
          key={index}
          name={member.name}
          role={member.role}
          bio={member.bio} 
          picture={member.picture}        
        />
      ))}
    </div>
  );
};

export default TeamPage;

