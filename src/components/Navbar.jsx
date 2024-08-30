import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close menu on link click
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg">
      <div className="h-24 bg-white rounded-md flex justify-between items-center px-8">
        {/* Responsive Logo */}
        <div>
          <img
            src="adlogo.png"
            alt="Logo"
            className="h-12 md:h-16 lg:h-20 object-contain" // Adjust the height based on screen size
          />
        </div>

        {/* Menu Button for Small Screens */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row absolute md:relative top-24 md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent space-y-5 md:space-y-0 md:space-x-5 p-5 md:p-0 ${isOpen ? 'flex' : 'hidden md:flex'}`}>
          <li
            className={`text-lg font-bold px-5 py-2 rounded-md transition-colors ${activeSection === 'home' ? 'bg-blue-500 text-white' : 'hover:bg-blue-300 active:bg-blue-600'
              }`}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => handleSetActive('home')}
            >
              Home
            </Link>
          </li>
          <li
            className={`text-lg font-bold px-5 py-2 rounded-md transition-colors ${activeSection === 'about' ? 'bg-blue-500 text-white' : 'hover:bg-blue-300 active:bg-blue-600'
              }`}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => handleSetActive('about')}
            >
              About
            </Link>
          </li>
          <li
            className={`text-lg font-bold px-5 py-2 rounded-md transition-colors ${activeSection === 'projects' ? 'bg-blue-500 text-white' : 'hover:bg-blue-300 active:bg-blue-600'
              }`}
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => handleSetActive('projects')}
            >
              Projects
            </Link>
          </li>
          <li
            className={`text-lg font-bold px-5 py-2 rounded-md transition-colors ${activeSection === 'contact' ? 'bg-blue-500 text-white' : 'hover:bg-blue-300 active:bg-blue-600'
              }`}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => handleSetActive('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* LinkedIn Button */}
        <div className="hidden md:block">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-md transition-colors"
            onClick={() => window.open('https://www.linkedin.com/in/akshay-doultani-26354b309', '_blank')}
          >
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
