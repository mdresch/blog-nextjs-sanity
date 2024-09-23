import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin,FaTwitter } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1: Socials */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4"> 
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="text-gray-400 hover:text-white" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about/mission">About</a>
              </li>
              <li>
                <a href="/about/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>
              Kopenhagenlaan 100<br />
              8232 RE Lelystad<br />
              <br />
              Email: info@cbaconsult.eu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
