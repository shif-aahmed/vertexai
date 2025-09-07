import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';
import logo from '../../assets/images/vertexai-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero-section')?.offsetHeight || 0;
      setShowNavbar(window.scrollY > heroHeight);

      // Update active link based on section in viewport
      const sections = ['about-us', 'services', 'contact-us'];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100; // buffer for navbar height
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveLink(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'visible fixed' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <a
            href="#about-us"
            className={activeLink === 'about-us' ? 'active' : ''}
          >
            About
          </a>
          <a
            href="#services"
            className={activeLink === 'services' ? 'active' : ''}
          >
            Services
          </a>
          <a
            href="#contact-us"
            className={activeLink === 'contact-us' ? 'active' : ''}
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <a
          href="#about-us"
          onClick={() => setIsOpen(false)}
          className={activeLink === 'about-us' ? 'active' : ''}
        >
          About
        </a>
        <a
          href="#services"
          onClick={() => setIsOpen(false)}
          className={activeLink === 'services' ? 'active' : ''}
        >
          Services
        </a>
        <a
          href="#contact-us"
          onClick={() => setIsOpen(false)}
          className={activeLink === 'contact-us' ? 'active' : ''}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
