// HeroSection.jsx
import React, { useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    // Hero animations
    const heroElements = document.querySelectorAll(".hero-title, .hero-subtext, .clients-awards-container");
    heroElements.forEach((el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    heroElements.forEach((el) => observer.observe(el));

    // Star background
    const layerCount = 5;
    const starCount = 400;
    const maxTime = 90;
    const universe = document.getElementById("universe");
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName("body")[0];
    const width = w.innerWidth || e.clientWidth || g.clientWidth;
    const height = w.innerHeight || e.clientHeight || g.clientHeight;

    for (let i = 0; i < starCount; ++i) {
      const ypos = Math.round(Math.random() * height);
      const star = document.createElement("div");
      const speed = 1000 * (Math.random() * maxTime + 1) * 3; 
      star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
      star.style.backgroundColor = "white";

      universe.appendChild(star);
      star.animate(
        [
          {
            transform: `translate3d(${width}px, ${ypos}px, 0)`
          },
          {
            transform: `translate3d(-${Math.random() * 256}px, ${ypos}px, 0)`
          }
        ],
        {
          delay: Math.random() * -speed,
          duration: speed,
          iterations: 1000
        }
      );
    }
  }, []);

  return (
    <div className="hero-wrapper">
      <section className="hero-section">
        <div id="universe"></div> {/* Stars background */}
        <div className="bg-pattern-layer"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Accelerating Growth with <br />
            <span className="highlight">Vertex AI Tech</span>
          </h1>
          <p className="hero-subtext">
Unlock the power of AI with scalable ML models, intelligent agents, and enterprise-grade security — helping your business innovate, scale, and thrive.
          </p>

          {/* <div className="clients-awards-container">
            <div className="clients-section">
              <p className="clients-label">TRUSTED BY</p>
              <div className="client-logos">
                <span>Google Cloud</span>
                <span>Wayfair</span>
                <span>Spotify</span>
                <span>Twitter</span>
                <span>UPS</span>
              </div>
            </div>

            <div className="awards-section1">
              <p className="awards-label">RECOGNITION</p>
              <div className="awards-logos">
                <span>Google AI</span>
                <span>Forrester</span>
                <span>Gartner</span>
                <span>TechCrunch</span>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
