import React, { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/images/vertexai-logo.png';

const Footer = () => {
  useEffect(() => {
    // Letter-by-letter animation for Contact Us header in subscribe section
    const heading = document.querySelector(".subscribe-floating h2");
    if (heading) {
      const text = heading.textContent;
      heading.textContent = "";
      text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.opacity = 0;
        span.style.display = "inline-block";
        span.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
        span.style.transform = "translateY(20px)";
        heading.appendChild(span);
      });

      const spans = heading.querySelectorAll("span");
      const headingObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              spans.forEach((span) => {
                span.style.opacity = 1;
                span.style.transform = "translateY(0)";
              });
            }
          });
        },
        { threshold: 0.3 }
      );
      headingObserver.observe(heading);
    }

    // Fade-in animation for subscribe section
    const subscribeSection = document.querySelector(".subscribe-floating");
    if (subscribeSection) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              subscribeSection.classList.add("fade-in");
            }
          });
        },
        { threshold: 0.2 }
      );
      sectionObserver.observe(subscribeSection);
    }

  }, []);

  return (
    <div className='footer-main' id='contact-us'>     
      <div className="subscribe-floating" >
        <h2>Contact Us</h2>
        <p className="subscribe-text">
          Tell us what you think!        
        </p>
        <div className="subscribe-box">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send</button>
        </div>
      </div>

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
              <p>03030303131</p>
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
