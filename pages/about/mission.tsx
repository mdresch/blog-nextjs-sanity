import React from 'react';
import BlogLayout from '/components/BlogLayout';

const Mission: React.FC = () => {
  return (
    <BlogLayout> 
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Mission, Vision, and Values</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8z shadow=lg">
          {/* Mission */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-bold mb-4 text-blue-500">Our Mission</h2>
            <p>
              To empower businesses and individuals to achieve their full potential by providing innovative and sustainable solutions that drive growth and create a positive impact on the world.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-bold mb-4 text-blue-500">Our Vision</h2>
            <p>
              To be a global leader in driving positive change through technology and innovation, fostering a future where businesses thrive responsibly and individuals reach new heights.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-bold mb-4 text-blue-500">Our Core Values</h2>
            <ul className="list-disc list-inside">
              <li>**Integrity:** We operate with honesty, transparency, and ethical conduct in all our interactions.</li>
              <li>**Excellence:** We strive for the highest standards in everything we do, continuously seeking improvement and innovation.</li>
              <li>**Collaboration:** We believe in the power of teamwork and partnership, working together to achieve shared goals.</li>
              <li>**Customer Focus:** We are dedicated to understanding and exceeding our customers' expectations, building lasting relationships based on trust and value.</li>
              <li>**Social Responsibility:** We are committed to making a positive impact on society and the environment, promoting sustainability and ethical business practices.</li>
            </ul>
          </div>
        </div>

        {/* Purpose Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Purpose</h2>
          <p>
            At CBA, we believe that business can be a force for good. Our purpose is to leverage our expertise and passion to create solutions that not only benefit our clients but also contribute to a more sustainable and equitable world. We are driven by the belief that by working together, we can make a real difference.
          </p>
        </div>
      </div>
    </BlogLayout>
  );
};

export default Mission;
