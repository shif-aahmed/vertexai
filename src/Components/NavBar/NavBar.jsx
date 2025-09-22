import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/images/vertexai-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const featureCards = document.querySelector('.hero-feature-cards');
      const heroSection = document.querySelector('.contact-us-section');
      const careerPage = document.querySelector('.career-page');
      const blogPage = document.querySelector('.blogs-page');
      const teamPage = document.querySelector('.our-team');
      if (featureCards || heroSection || careerPage || blogPage || teamPage) {
        const triggerElement =
          featureCards || heroSection || careerPage || blogPage || teamPage;
        const triggerTop = triggerElement.getBoundingClientRect().top;

        if (triggerTop <= 80) {
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
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          <Link to="/" className={activeLink === 'home' ? 'active' : ''}>
            Home
          </Link>
          {/* <Link
            onClick={() => handleSectionClick('about-us')}
            className={activeLink === 'about-us' ? 'active' : ''}
          >
            About
          </Link> */}
          <Link
            onClick={() => handleSectionClick('services')}
            className={activeLink === 'services' ? 'active' : ''}
          >
            Services
          </Link>
          <Link to="/career" className={activeLink === 'career' ? 'active' : ''}>
            Career
          </Link>
          <Link to="/blogs" className={activeLink === 'blogs' ? 'active' : ''}>
            Blog
          </Link>
          <Link to="/team" className={activeLink === 'team' ? 'active' : ''}>
            Our Team
          </Link>
          <Link
            to="/contact-us"
            className={activeLink === 'contact-us' ? 'active' : ''}
          >
            Contact Us
          </Link>

          {/* Google Button */}
          <Link
            to="https://coin.vertexaitec.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="google-btn"
          >
            VertexAi Coin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" className={activeLink === 'home' ? 'active' : ''}>
          Home
        </Link>
        <Link
          onClick={() => handleSectionClick('about-us')}
          className={activeLink === 'about-us' ? 'active' : ''}
        >
          About
        </Link>
        <Link
          onClick={() => handleSectionClick('services')}
          className={activeLink === 'services' ? 'active' : ''}
        >
          Services
        </Link>
        <Link to="/career" className={activeLink === 'career' ? 'active' : ''}>
          Career
        </Link>
        <Link to="/blogs" className={activeLink === 'blogs' ? 'active' : ''}>
          Blog
        </Link>
        <Link to="/team" className={activeLink === 'team' ? 'active' : ''}>
          Our Team
        </Link>
        <Link
          to="/contact-us"
          className={activeLink === 'contact-us' ? 'active' : ''}
        >
          Contact Us
        </Link>

        {/* Google Button for Mobile */}
        <Link
          to="https://coin.vertexaitec.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="google-btn"
        >
          Google
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
