// components/Sidebar/Sidebar.tsx
import './Sidebar.css';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Example icon, replace with your preferred icon library

// SidebarItem Interface
interface SidebarItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

interface SidebarProps {
  items: SidebarItem[];
  settings: SidebarItem[];
  isOpen: boolean;
  toggleSidebar: () => void; // Corrected type
}

const Sidebar: React.FC<SidebarProps> = ({ items, settings, isOpen, toggleSidebar }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleSidebar(); // Call the passed toggle function
  };

  return (
    <aside
      className={`fixed top-16 h-screen left-0 bg-gray-800 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0 w-64' : 'w-16 -translate-x-full' // Adjust sidebar width
      } md:translate-x-0`}
    >
      {/* Sidebar content */}
      <ul className="pt-16 md:pt-0">
        {items.map((item) => (
          <li key={item.id} className="mb-4">
            <Link href={item.link} className="flex items-center px-4 py-2 text-white hover:bg-gray-700 hover:text-white">
              {/* Icon (always visible) */}
              <span className="mr-3 text-white">{item.icon}</span> 
              {/* Title (conditionally render based on isOpen state) */}
              {isOpen && <span className="text-sm">{item.title}</span>} 
            </Link>
          </li>
        ))}
      </ul>
      {/* Open/Close button at the bottom left */}
      {/* Settings menu at the bottom */}
      <div className="absolute bottom-10 w-full p-4 bg-gray-700">
        {isOpen && <span className="text-lg text-white py-2 font-bold mb-2">Settings</span>}
        <ul>
          {settings.map((item) => (
            <li key={item.id} className="mb-4">
              <Link href={item.link} className="flex items-center py-2 text-white hover:bg-gray-800 hover:text-white">
                <span className="mr-3 text-white">{item.icon}</span>
                {isOpen && <span className="text-sm">{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Open/Close button at the bottom left */}
      <button
        onClick={handleToggleSidebar}
        className="fixed bottom-4 left-4 text-white z-30"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />} {/* Toggle icon */}
      </button>
    </aside>
  );
};

export default Sidebar;
