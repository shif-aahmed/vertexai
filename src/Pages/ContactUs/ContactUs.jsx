// File: ContactUs.jsx
import React, { useEffect, useState } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./ContactUs.css";

// Firebase imports
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp(),
      });
      alert("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error saving contact message:", error);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <HeroSection
        heading1="Get in Touch"
        heading2="Let’s Build the Future of AI Together"
        heading3="Have questions, ideas, or partnership opportunities? We’d love to hear from you. Reach out to our team and we’ll get back to you as soon as possible."
        heading1Class="contact-heading1"
        heading2Class="contact-heading2"
        heading3Class="contact-heading3"
        showFeatureCards={false}
      />

      <div className="contact-us-section container py-5" id="contact">
        <div className="row bg-white rounded p-4">
          {/* Left side - Form */}
          <div className="col-lg-8 col-md-12 mb-4">
            <h2 className="fw-bold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="4"
                  placeholder="Your message*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-outline-info px-4"
                disabled={loading}
              >
                {loading ? "Sending..." : "SUBMIT"}
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
              <p>
                <i className="bi bi-telephone-fill me-2 text-info"></i>
                +1 (904) 835-8539
              </p>
            </div>

            {/* Optional quick support */}
            {/* <div>
              <h5 className="fw-bold mt-5">Quick Support</h5>
              <p className="h4 fw-bold mb-0 msg-us">+92 339 0107478</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
