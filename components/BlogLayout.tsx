// components/BlogLayout.tsx
import AlertBanner from 'components/AlertBanner';
import React, { useState } from 'react';
import { FaBriefcase, FaChartLine, FaEnvelope, FaUsers } from 'react-icons/fa';

import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar'; // Import the Sidebar component

// SidebarItem Interface
interface SidebarItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

// Subscribed Items Array
const subscribedItems: SidebarItem[] = [
  {
    id: 1,
    title: 'Our Team',
    icon: <FaBriefcase size={20}/>, 
    link: '/about/team',
  },
  {
    id: 2,
    title: 'Our History',
    icon: <FaChartLine size={20}/>,
    link: '/about/history',
  },
  {
    id: 3,
    title: 'Our Mission',
    icon: <FaUsers size={20}/>, // Example icon from react-icons
    link: '/about/mission', 
  },
  {
    id: 4,
    title: 'Contact',
    icon: <FaEnvelope size={20}/>, // Example icon
    link: '/about/contact',
  },
];

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean;
  loading?: boolean;
  children: React.ReactNode;
}) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 w-full h-16 bg-white z-30">
          <Navbar toggleSidebar={toggleSidebar} isSidebaropen={false}/>
        </header>

        <div className="flex-grow">
          <AlertBanner preview={preview} loading={loading} />
          <main
          className={`${
            isSidebarOpen ? 'md:ml-64' : 'md:ml-20' // Adjust main content margin
          } transition-all duration-300 ease-in-out`}
        >
          {children}
        </main>
          <Sidebar 
          items={subscribedItems} 
          isOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
          />
        </div>
        
        <Footer />
      </div>
    </>
  );
}
