import React from 'react';
import widgetImage11 from "../../assets/images/Microsoft.svg";
import widgetImage12 from "../../assets/images/Salesforce.svg";
import widgetImage13 from "../../assets/images/aws.svg";

import './AwardsSection.css';

const partnerships = [
  {
    img: widgetImage12,
    text: "Salesforce – Official Vertex AI Partner",
  },
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
      {/* Merged Partnerships Section */}
      <section className="partnership-section" id="partnerships">
        <h2>Our Partnerships</h2>
        <p className="subtitle">
          We partner with Salesforce and other leading cloud providers to deliver robust Vertex AI solutions, ensuring seamless integrations, innovative technologies, and scalable multi-cloud support.
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
    </div>
  );
};

export default AwardsSection;
