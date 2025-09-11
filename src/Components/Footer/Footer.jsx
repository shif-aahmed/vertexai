import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/images/vertexai-logo.png";
  const handleSectionClick = (sectionId) => {
    window.location.href = `/#${sectionId}`;
    setIsOpen(false);
  };

const Footer = () => {
  return (
    <div className="footer-main">
      <footer>
        <div className="footer-bottom container-fluid">
          <div className="row text-center text-md-start align-items-start">
            {/* Logo + Social */}
            <div className="footer-brand col-12 col-md-3">
              <div className="footer-logo">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <div className="footer-social">
                <div className="social-icons">
                  <a href="https://www.facebook.com/profile.php?id=61579347417539"><FaFacebookF /></a>
                  <a href="https://www.instagram.com/vertexaitech/"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/company/vertexai-tec"><FaLinkedin /></a>
<a 
  href="https://wa.me/923390107478" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaWhatsapp />
</a>
               
                </div>
              </div>
            </div>

            {/* Company */}
<div className="footer-company col-12 col-md-3">
  <h4>Company</h4>
  <p>
    <a href="/">Home</a>
  </p>
  <p>
    <a onClick={() => handleSectionClick('services')} href="#services">Services</a>
  </p>
  <p>
    <a href="/contact-us">Contact</a>
  </p>
</div>


            {/* Business */}
            <div className="footer-business col-12 col-md-3">
              <h4>Business</h4>
              <p>Full Stack Development</p>
              <p>UI/UX Designing</p>
              <p>ML Model Development</p>
              <p>Mobile Application</p>
            </div>

            {/* Get In Touch */}
            <div className="footer-contact col-12 col-md-3">
              <h4>Get In Touch</h4>
              <p>info@vertexaitec.com</p>
              <p>+971 55 2900864</p>
              <p>+92 339 0107478</p>
            </div>
          </div>

          <div className="footer-bottom-nav">
            <p>© 2025 | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
