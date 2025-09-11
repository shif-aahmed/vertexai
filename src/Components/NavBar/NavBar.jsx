import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';
import logo from '../../assets/images/vertexai-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const featureCards = document.querySelector('.hero-feature-cards');

      if (featureCards) {
        const featureTop = featureCards.getBoundingClientRect().top;

        // Navbar should change once feature cards reach the top of the viewport
        if (featureTop <= 80) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    window.location.href = `/#${sectionId}`;
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <a
            href="/"
            className={activeLink === 'home' ? 'active' : ''}
          >
            Home
          </a>
          <a
            onClick={() => handleSectionClick('about-us')}
            className={activeLink === 'about-us' ? 'active' : ''}
          >
            About
          </a>
          <a
            onClick={() => handleSectionClick('services')}
            className={activeLink === 'services' ? 'active' : ''}
          >
            Services
          </a>
          <a
            href="/contact-us"
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
          href="/"
          className={activeLink === 'home' ? 'active' : ''}
        >
          Home
        </a>
        <a
          onClick={() => handleSectionClick('about-us')}
          className={activeLink === 'about-us' ? 'active' : ''}
        >
          About
        </a>
        <a
          onClick={() => handleSectionClick('services')}
          className={activeLink === 'services' ? 'active' : ''}
        >
          Services
        </a>
        <a
          href="/contact-us"
          className={activeLink === 'contact-us' ? 'active' : ''}
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
