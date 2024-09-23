import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

interface NavbarProps {
  toggleSidebar: () => void;
  isSidebaropen: boolean; 
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-gray-800 ${isSticky ? 'sticky' : ''} top-0 z-50 flex items-right justify-between py-4 px-6 shadow-md`}>
      {/* Open/Close Sidebar Button */}
      <button
        onClick={toggleSidebar}
        className="text-white focus:outline-none"
      >
        <FaBars size={20} />
      </button>
      <div className="container mx-auto flex items-right">
        {/* Your logo or brand name */}
        <Link href="/" className="text-2xl font-bold text-white">
          Blog.
        </Link>

        {/* Dropdown Menus */}
        {/* About Us Dropdown */}
        <div className="relative group ml-auto"> 
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About Us
          </button>
          <div className="absolute hidden group-hover:block bg-gray-700 text-left rounded-md shadow-lg mt-1 right-0">
            <Link href="/about/team" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              Our Team
            </Link>
            <Link href="/about/mission" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              Our Mission
            </Link>
            <Link href="/about/contact" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Services Dropdown 
        <div className="relative group ml-auto"> 
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Business Services
          </button>
          <div className="absolute hidden group-hover:block bg-gray-700 text-left rounded-md shadow-lg mt-1 right-0">
            <Link href="/services/development" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              Business Development and Change Management
            </Link>
            <Link href="/services/finance-control" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              Finance and Control
            </Link>
            <Link href="/services/Risk-and-Compliance" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              Risk and Compliance
            </Link>
            <Link href="/services/IT-Governance-Planning" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              IT Governance Planning Service
            </Link>
            <Link href="/services/Security" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              Security
            </Link>
          </div>
        </div>
        */}
        {/* Modern Workforce Dropdown 
        <div className="relative group ml-auto"> 
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Modern Workforce
          </button>
          <div className="absolute hidden group-hover:block bg-gray-700 text-left rounded-md shadow-lg mt-1 right-0">
            <Link href="/modern/Identity" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              Identity
            </Link>
            <Link href="/modern/Data" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              Data
            </Link>
            <Link href="/modern/Devices" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              Devices
            </Link>
            <Link href="/modern/Apps" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600">
              Apps
            </Link>
          </div>

        </div>
        */}
      </div>
    </nav>
  );
};

export default Navbar;