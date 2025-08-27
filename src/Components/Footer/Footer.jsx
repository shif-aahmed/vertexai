import React from 'react';
import { FaLink, FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'; // Added icons
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-main'>     
     <div className="subscribe-floating">
        <h4>Stay Updated</h4>
        <p className="subscribe-text">
          Subscribe for the latest AI insights and tips.
        </p>
        <div className="subscribe-box">
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    <footer>      
      {/* Bottom section */}
      <div className="footer-bottom container-fluid">
        <div className="row text-center text-md-start">
          <div className="footer-brand col-12 col-md-3">
            <h1>Vertex AI<sup>®</sup></h1>
          </div>
          <div className="footer-address col-12 col-md-3">
            <h4>Address</h4>
            <p>DHA phase 3<br />block Z</p>
          </div>
          <div className="footer-contact col-12 col-md-3">
            <h4>Contact Us</h4>
            <p>rizwanpervaizwork@gmail.com</p>
            <p>03030303131</p>
          </div>
          <div className="footer-social col-12 col-md-3">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><FaLink /></a>
              <a href="https://www.facebook.com/profile.php?id=61579347417539"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaTiktok /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-nav">
        <p>© 2025 | All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
