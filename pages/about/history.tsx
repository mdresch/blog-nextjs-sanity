/* eslint-disable react/no-children-prop */
import './history.css';

import Timeline from 'components/Timeline';
import React from 'react';

import BlogLayout from '../../components/BlogLayout';

const History: React.FC = () => {
  return (
    <BlogLayout>
      <div className="timeline-container">
        <Timeline/>
        </div> 
    </BlogLayout>
    );
};
    
export default History;
