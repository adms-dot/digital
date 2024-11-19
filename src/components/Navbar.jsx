import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full h-20  bg-glass backdrop-filter backdrop-blur-2xl p-4 flex justify-between items-center">
      {/* Logo */}
      <img className="h-12 md:h-20" src={logo} alt="Logo" />

      {/* Hamburger Icon for mobile view */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          className="text-black focus:outline-none"
        >
          <FontAwesomeIcon icon={faBars} className="w-8 h-8" />
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:justify-center ml-32 md:items-center absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0 px-6 md:px-0`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </NavLink>
        <NavLink
          to="/price"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `relative hover:text-orange-500 ${isActive ? 'text-orange-500' : ''}`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </NavLink>
      </div>

      {/* Call Us Button (hidden on mobile, visible on larger screens) */}
      <div className="hidden md:block">
        <NavLink
          to="/consult"
          className="bg-orange-500 text-white rounded-3xl px-4 py-2 transition duration-500 ease-in-out hover:bg-black hover:text-orange-500"
        >
          Book a Consultation
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
