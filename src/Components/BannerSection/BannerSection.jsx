// src/Components/BannerSection/BannerSection.jsx
import React from "react";
import "./BannerSection.css";

const BannerSection = () => {
  return (
    <div className="banner-container">
    <section className="banner-section">
      <p className="intro-statement">
        We helped enterprises unlock a <span className="highlight-green">25% boost</span> in model performance using Vertex AI. Faster deployments. Smarter outcomes.
      </p>

      <div className="banner-content">
        <h1>
          Leading your<br /> AI journey to success
        </h1>

        {/* <button className="work-button">Let's work together</button> */}
        
        <div className="stats-separator"></div>

        <div className="banner-stats">
          <div className="stat-box">
            <h3>15+</h3>
            <p>Years of AI-driven innovation</p>
          </div>
          <div className="stat-box">
            <h3>1000+</h3>
            <p>ML & cloud transformation experts</p>
          </div>
          <div className="stat-box">
            <h3>500+</h3>
            <p>AI Projects Successfully Delivered</p>
          </div>
          <div className="stat-box">
            <h3>94%</h3>
            <p>Client Satisfaction in AI Solutions</p>
          </div>
          <div className="stat-box">
            <h3>40%</h3>
            <p>Business Domains Transformed</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default BannerSection;
