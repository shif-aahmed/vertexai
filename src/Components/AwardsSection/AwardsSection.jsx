import React from 'react';
import widgetImage11 from "../../assets/images/Microsoft.svg";
import widgetImage12 from "../../assets/images/Salesforce.svg";
import widgetImage13 from "../../assets/images/aws.svg";

import './AwardsSection.css';
const partnerships = [
  {
    img: widgetImage12,
    text: "Salesforce – Official Vertex AI Partner",
  }
];

const integrations = [
  {
    img: widgetImage11,
    text: "Microsoft – Supported integrations for multi-cloud environments",
  },
  {
    img: widgetImage13,
    text: "AWS – Supported integrations for multi-cloud environments",
  }
];

const AwardsSection = () => {
  return (
    <div className='awards-container'>
      {/* Official Partnership Section */}
      <section className="partnership-section" id="partnerships">
        <h2>Our Partnerships</h2>
        <p className="subtitle">
          Our official strategic partnership with Salesforce empowers our Vertex AI
          solutions with cutting-edge technologies and scalable infrastructure.
        </p>
        <div className="awards-grid">
          {partnerships.map((item, index) => (
            <div className="award-card" key={index}>
              <img src={item.img} alt={`partnership ${index}`} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section className="partnership-section">
        <h2>Integrations & Ecosystem</h2>
        <p className="subtitle">
          Vertex AI can integrate with tools and platforms from other cloud providers
          for customers operating in diverse environments.
        </p>
        <div className="awards-grid">
          {integrations.map((item, index) => (
            <div className="award-card" key={index}>
              <img src={item.img} alt={`integration ${index}`} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AwardsSection;
