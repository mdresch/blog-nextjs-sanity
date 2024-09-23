import React from 'react';
import BlogLayout from '/components/BlogLayout';
import TeamPage from 'components/Teampage';
import './team.css'

const Team: React.FC = () => {
  return (
    <BlogLayout> 
      <div className="team-container mx-=auto px-7 py-/8">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8z shadow=lg">
        <TeamPage />
        </div>
      </div>
    </BlogLayout>
  );
};

export default Team;