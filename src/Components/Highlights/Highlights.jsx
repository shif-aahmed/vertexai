import React from 'react';
import backgroundImage1 from "../../assets/images/image-element1.jpg";
import backgroundImage2 from "../../assets/images/image-element2.jpg";
import backgroundImage3 from "../../assets/images/image-element3.jpg";
import backgroundImage4 from "../../assets/images/image-element4.jpg";
import backgroundImage5 from "../../assets/images/image-element5.jpg";
import backgroundImage6 from "../../assets/images/image-element6.jpg";
import backgroundImage7 from "../../assets/images/image-element7.jpg";
import backgroundImage8 from "../../assets/images/image-element8.jpg";
import './Highlights.css';

const cards = [
  {
    title1: 'Accelerated Model Training',
    title2: 'Using Vertex AI Pipelines',
    value: '60',
    text: 'Faster ML Deployment',
    desc: 'Vertex AI allowed us to manage the full ML lifecycle with unprecedented speed and reliability.',
    backgroundImage: backgroundImage1,
  },
  {
    title1: 'Personalized Shopping',
    title2: 'With Vertex AI Recommenders',
    value: '75',
    text: 'Increase in User Engagement',
    desc: 'By using Vertex AI’s prediction and recommendation services, we enhanced customer journeys.',
    backgroundImage: backgroundImage2,
  },
  {
    title1: 'AI-Assisted Diagnosis',
    title2: 'with Custom Vertex Models',
    value: '90',
    text: 'Accuracy in Early Detection',
    desc: 'Vertex AI’s AutoML enabled faster training and better diagnostic precision.',
    backgroundImage: backgroundImage3,
  },
  {
    title1: 'Real-time Analytics',
    title2: 'with Vertex AI Streaming',
    value: '85',
    text: 'Reduction in Fraud Detection Time',
    desc: 'Vertex AI helped us shift from reactive to proactive fraud monitoring at scale.',
    backgroundImage: backgroundImage4,
  },
  {
    title1: 'Claims Automation',
    title2: 'via Vertex AI Agents',
    value: '70',
    text: 'Faster Claim Processing',
    desc: 'Vertex AI dramatically improved our claims automation workflows using natural language models.',
    backgroundImage: backgroundImage5,
  },
  {
    title1: 'Predictive Maintenance',
    title2: 'Using Vertex AI Forecasting',
    value: '88',
    text: 'Decrease in Downtime',
    desc: 'We leveraged Vertex AI’s time series tools to anticipate failures and optimize service schedules.',
    backgroundImage: backgroundImage6,
  },
  {
    title1: 'Document Intelligence',
    title2: 'Powered by Vertex AI OCR',
    value: '95',
    text: 'Time Saved Per Case Review',
    desc: 'Vertex AI helped digitize and analyze thousands of legal documents with pinpoint accuracy.',
    backgroundImage: backgroundImage7,
  },
  {
    title1: 'AI Chat Support',
    title2: 'Using Vertex AI Agents',
    value: '65',
    text: 'Reduction in Support Costs',
    desc: 'By integrating Vertex AI chat models, we scaled support while improving resolution time.',
    backgroundImage: backgroundImage8,
  },
];

const Highlights = () => {
  const scrollSlider = (direction) => {
    const slider = document.getElementById('slider');
    const scrollAmount = 320;
    slider.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="component" id="highlights">
      <div className="component-wrapper">
      <div className="heading d-flex justify-content-between align-items-center">
        <div className="header">
          <h3>Strategic Highlights</h3>
        </div>
        <div className="slider-buttons">
          <button className="slide-btn" onClick={() => scrollSlider(-1)}>
            <i className="ri-arrow-left-s-line" style={{ fontSize: "24px" }}></i>
          </button>
          <button className="slide-btn" onClick={() => scrollSlider(1)}>
            <i className="ri-arrow-right-s-line" style={{ fontSize: "24px" }}></i>
          </button>
        </div>
      </div>

      <div className="slider-container2 d-flex" id="slider">
        {cards.map((card, index) => (
          <div
            className="box"
            key={index}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent), url(${card.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <div className="cs_body">
              <div className="cs_title">
                <h3>{card.title1}</h3>
                <h3>{card.title2}</h3>
                <hr />
              </div>
              <div className="kpis">
                <div className="kpi d-flex">
                  <p className="value">{card.value}<span>%&nbsp;&nbsp;</span></p>
                  <p className="text">{card.text}</p>
                </div>
              </div>
              <div className="cs_footer">
                <p className="cs_desc">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Highlights;
