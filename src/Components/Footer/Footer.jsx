import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/images/vertexai-logo.png';

const Footer = () => {
  return (
    <div className='footer-main'>     
      <footer>      
        {/* Bottom section */}
        <div className="footer-bottom container-fluid">
          <div className="row text-center text-md-start">
            <div className="footer-brand col-12 col-md-3">
              <div className="footer-logo">
                <a href="#home">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="footer-address col-12 col-md-3">
              <h4>Address</h4>
              <p>DHA phase 3<br />block Z</p>
            </div>
            <div className="footer-contact col-12 col-md-3">
              <h4>Contact Us</h4>
              <p>rizwanpervaizwork@gmail.com</p>
              <p>0303-0303131</p>
            </div>
            <div className="footer-social col-12 col-md-3">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61579347417539">
                  <FaFacebookF />
                </a>
                <a 
                  href="https://wa.me/923390107478" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>

                <a href="https://www.linkedin.com/company/vertexai-tec">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/vertexaitech/">
                  <FaInstagram />
                </a>
              </div>
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
