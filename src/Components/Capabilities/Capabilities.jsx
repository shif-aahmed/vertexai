import React, { useRef } from 'react';
import './Capabilities.css';

const data = [
  {
    title: 'Leverage Vertex AI to build, train, and deploy machine learning models at scale with ease.',
    button: 'Vertex AI Models',
  },
  {
    title: 'Automate data workflows and pipeline management using Vertex AI Pipelines for consistent results.',
    button: 'AI Pipelines',
  },
  {
    title: 'Ensure model accuracy and reliability through Vertex AI Experiments and continuous monitoring.',
    button: 'Model Monitoring',
  },
  {
    title: 'Deploy ML models securely and efficiently with Vertex AI Endpoints for real-time predictions.',
    button: 'AI Deployment',
  },
  {
    title: 'Integrate advanced AI solutions into business operations to drive actionable insights and innovation.',
    button: 'AI Integration',
  },
  {
    title: 'Adopt best practices in AI governance and compliance using Vertex AI’s robust security features.',
    button: 'AI Governance',
  },
];

const Capabilities = () => {
  const sliderRef = useRef();

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 350;
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 350;
    }
  };

  return (
    <div className="slider-container" id="capabilities">
      {/* Top bar */}
      <div className="slider-topbar">
        <h2 className="slider-heading">Capabilities</h2>
        <div className="slider-buttons">
          <button className="arrow-btn" onClick={handlePrev}>
            <i className="ri-arrow-left-s-line" style={{ fontSize: "24px" }}></i>
          </button>
          <button className="arrow-btn" onClick={handleNext}>
            <i className="ri-arrow-right-s-line" style={{ fontSize: "24px" }}></i>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <div className="dot"></div>
                <p className="card-title">{item.title}</p>
              </div>
              <button className="card-button">{item.button}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
