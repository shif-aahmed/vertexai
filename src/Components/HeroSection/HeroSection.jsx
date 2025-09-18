import React, { useEffect } from "react";
import { FaLightbulb, FaCode, FaCogs, FaRocket } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = ({
  heading1,
  heading2,
  heading3,
  buttonText,
  buttonLink,
  heading1Class,
  heading2Class,
  heading3Class,
  showFeatureCards = true,
}) => {
  useEffect(() => {
    const heroElements = document.querySelectorAll(
      ".hero-heading1, .hero-heading2, .hero-heading3, .hero-button"
    );

    // Animate hero headings/button on page load
    heroElements.forEach((el, index) => {
      el.classList.add("pre-animate"); // start hidden
      setTimeout(() => {
        el.classList.add("animate-visible"); // stagger fade in
      }, index * 200);
    });

    // Scroll-triggered animation for feature cards
    if (showFeatureCards) {
      const cards = document.querySelectorAll(".feature-card");
      cards.forEach(card => card.classList.add("pre-animate")); // start hidden

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-visible");
              observer.unobserve(entry.target); // animate only once
            }
          });
        },
        { threshold: 0.3 }
      );

      cards.forEach(card => observer.observe(card));
    }

  }, [showFeatureCards]);

  return (
    <div className="hero-wrapper">
      <section className="hero-section">
        <div className="hero-text-left">
          {heading1 && <p className={heading1Class || "hero-heading1"}>{heading1}</p>}
          {heading2 && <p className={heading2Class || "hero-heading2"}>{heading2}</p>}
          {heading3 && <p className={heading3Class || "hero-heading3"}>{heading3}</p>}

          {buttonText && buttonLink && (
            <button className="hero-button">
              <a href={buttonLink}>{buttonText}</a>
            </button>
          )}
        </div>

        {/* Particles container */}
        <div className="hero-particles"></div>
      </section>

      <div className="e-con-inner">
        <div
          className="elementor-shape elementor-shape-bottom"
          aria-hidden="true"
          data-negative="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill"
              d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
            ></path>
          </svg>
        </div>
      </div>

      {showFeatureCards && (
<div className="hero-feature-cards">
  <div className="feature-card">
    <FaLightbulb size={40} />
    <h3>Innovate</h3>
  </div>
  <div className="feature-card">
    <FaCode size={40} />
    <h3>Develop</h3>
  </div>
  <div className="feature-card">
    <FaCogs size={40} />
    <h3>Engineer</h3>
  </div>
  <div className="feature-card">
    <FaRocket size={40} />
    <h3>Launch</h3>
  </div>
</div>

      )}
    </div>
  );
};

export default HeroSection;
