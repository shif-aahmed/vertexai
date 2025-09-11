import React, { useEffect } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";

import "./ContactUs.css";

const ContactUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".contact-us-section h2, .contact-us-section form, .contact-us-section .reach"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <HeroSection
        heading1="Reach Out Today"
        heading2="Premium Business Solutions for Your Success"
        heading3="At Vertex AI Tech, we harness cutting-edge technology and innovative strategies to solve your toughest challenges. Connect with us to transform your ideas into reality."
        heading1Class="contact-heading1"
        heading2Class="contact-heading2"
        heading3Class="contact-heading3"
        showFeatureCards={false} // cards will NOT render
      />
      <div className="contact-us-section container py-5" id="contact">
        <div className="row bg-white rounded p-4">
          {/* Left side - Form */}
          <div className="col-lg-8 col-md-12 mb-4">
            <h2 className="fw-bold mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name*"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email*"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your message*"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-info px-4">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Right side - Contact Info */}
          <div className="col-lg-4 col-md-12 reach">
            <h2 className="fw-bold mb-4">Where to Find Us</h2>
            <div className="mb-4">
              <p className="mb-4">
                <i className="bi bi-envelope-fill me-2 text-info"></i>
                info@vertexaitec.com
              </p>
              <p className="mb-4">
                <i className="bi bi-telephone-fill me-2 text-info"></i>
                +971 55 2900864
              </p>
              <p>
                <i className="bi bi-phone-fill me-2 text-info"></i>
                +92 339 0107478
              </p>
            </div>

            <div>
              <h5 className="fw-bold mt-5">Quick Support</h5>
              <p className="h4 fw-bold mb-0 msg-us">+92 339 0107478</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
