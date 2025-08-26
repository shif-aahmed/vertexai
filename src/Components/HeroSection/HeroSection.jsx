import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <section className="hero-section">
        <div className="bg-pattern-layer"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Powering Innovation with <br />
            <span className="highlight">Google Cloud Vertex AI</span>
          </h1>
          <p className="hero-subtext">Deploy, scale, and manage machine learning models seamlessly.</p>
          {/* <button className="hero-button">Start Building</button> */}

          {/* Combined clients and awards container */}
          <div className="clients-awards-container">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
