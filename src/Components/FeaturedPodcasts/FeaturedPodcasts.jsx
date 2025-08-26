import React, { useRef } from "react";
import "./FeaturedPodcasts.css";

// Image Imports
import GoogleImg from "../../assets/images/people2.png";
import IBMImg from "../../assets/images/people3.png";
import intelImg from "../../assets/images/people1.png";
import MicrosoftImg from "../../assets/images/people5.png";
import SonyImg from "../../assets/images/people4.png";
import ciscoImg from "../../assets/images/people6.png";

const podcasts = [
  {
    logo: "Intel",
    name: "Ava Reynolds",
    role: "CTO",
    title: "Scaling AI Workloads Using Vertex AI & Edge Intelligence",
    image: intelImg,
  },
  {
    logo: "Google Cloud",
    name: "Sofia Bennett",
    role: "CTO",
    title: "Building Responsible AI with Vertex AI",
    image: GoogleImg,
  },
  {
    logo: "IBM",
    name: "Jayden Brooksr",
    role: "CTO",
    title: "Securing AI Models and Data Pipelines at Scale",
    image: IBMImg,
  },
  {
    logo: "Cisco",
    name: "Emily Zhang",
    role: "CTO",
    title: "AI and Network Intelligence: Vertex AI in Smart Infrastructure",
    image: ciscoImg,
  },
  {
    logo: "Microsoft Azure",
    name: "Noah Patel",
    role: "CTO",
    title: "AI-Powered Customer Experience with Multi-Cloud Platforms",
    image: MicrosoftImg,
  },
  {
    logo: (
      <>
        SONY<br />PICTURES
      </>
    ),
    name: "Adela Jamal",
    role: "CTO",
    title: "AI for Creativity, Inclusion & Empowerment with Vertex AI",
    image: SonyImg,
  },
];

export default function FeaturedPodcasts() {
  const listRef = useRef(null);

  const handleNext = () => {
    listRef.current.scrollLeft += 300;
  };

  const handlePrev = () => {
    listRef.current.scrollLeft -= 300;
  };

  return (
    <div className="podcast-wrapper">
      <div className="podcast-header">
        <h2 className="podcast-heading">Featured Podcasts</h2>
        <div className="header-right">
          <div className="all-podcasts">All Podcasts</div>
          <button className="arrow-btn" onClick={handlePrev}>
            <i className="ri-arrow-left-s-line" style={{ fontSize: "24px" }}></i>
          </button>
          <button className="arrow-btn" onClick={handleNext}>
            <i className="ri-arrow-right-s-line" style={{ fontSize: "24px" }}></i>
          </button>
        </div>
      </div>

      <div className="podcast-list" ref={listRef}>
        {podcasts.map((item, index) => (
          <div className="podcast-card" key={index}>
            <div className="card-bg"></div>
            <img src={item.image} alt={item.name} className="podcast-img" />
            <div className="card-overlay">
              <div className="logo-top">{item.logo}</div>
              <div className="card-content">
                <div>
                  <div className="podcast-content">
                    <p className="podcast-role">{item.role}</p>
                    <p className="podcast-name">{item.name}</p>
                  </div>
                  <p className="podcast-title">{item.title}</p>
                </div>
                {/* <button className="play-button">▶</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
