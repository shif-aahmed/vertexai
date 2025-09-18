import React, { useState } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./OurTeam.css";
import { FaLinkedin } from "react-icons/fa";
import ceo from "../../assets/images/ceo.png";
import cto from "../../assets/images/cto.png";
import stakeholder from "../../assets/images/stakeholder.jpg";
import hrManager from "../../assets/images/hr-manager.png";
import hrExecutive from "../../assets/images/hr-executive.png";
import pm from "../../assets/images/pm.png";
import UI from "../../assets/images/ui-ux-manager.png";
import reactNative from "../../assets/images/react-native-engineer.png";
import aiIntern from "../../assets/images/ai-intern.png";

const teamMembers = [
  {
    id: 1,
    name: "Daud Ali",
    designation: "Chief Executive Officer",
    email: "xyz@example.com",
    linkedin: "https://linkedin.com/in/alice",
    image: ceo
  },
  {
    id: 2,
    name: "Umair",
    designation: "stakeholder",
    email: "xyz@example.com",
    linkedin: "https://linkedin.com/in/bob",
    image: stakeholder
  },
  {
    id: 3,
    name: "Rizwan Shehzad",
    designation: "Chief Technology Officer",
    email: "xyz@example.com",
    linkedin: "https://linkedin.com/in/charlie",
    image: cto
  },
  {
    id: 4,
    name: "Aroob Tahir",
    designation: "HR Manager",
    email: "xyz@example.com",
    linkedin: "https://linkedin.com/in/diana",
    image: hrManager
  },
  {
    id: 5,
    name: "Ethan Lee",
    designation: "HR Executive",
    email: "xyz@example.com",
    linkedin: "https://linkedin.com/in/ethan",
    image: hrExecutive
  },
  {
    id: 6,
    name: "Noraiz Choudhary",
    designation: "Project Manager",
    email: "xyz@example.com",
    linkedin: "https://linkedin.com/in/fiona",
    image: pm
  },
  {
    id: 7,
    name: "Muhammad Danish",
    designation: "UI/UX Designer",
    email: "xyz@example.com",
    linkedin: "https://linkedin.com/in/george",
    image: UI
  },
  {
    id: 8,
    name: "Muhammad Abdullah",
    designation: "React Native Engineer",
    email: "xyz@example.com",
    linkedin: "https://linkedin.com/in/hannah",
    image: reactNative
  },
    {
    id: 8,
    name: "Alishba Abbas",
    designation: "AI/ML Intern",
    email: "xyz@example.com",
    linkedin: "https://linkedin.com/in/hannah",
    image: aiIntern
  }
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <HeroSection
        heading1="Our Team"
        heading2="Meet the Brains Behind Vertex AI"
        heading3="A passionate team of innovators, engineers, and creators working together to make our product the best."
        heading1Class="contact-heading1"
        heading2Class="contact-heading2"
        heading3Class="contact-heading3"
        showFeatureCards={false}
      />

      <section className="our-team">
        <div className="container">
          <h2 className="heading">Meet the Team</h2>
          <p className="subheading">
            The innovators, engineers, and creators driving our mission to build
            the future of AI together.
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-img"
                />
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                  <button
                    className="profile-btn"
                    onClick={() => setSelectedMember(member)}
                  >
                    Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overlay */}
        {selectedMember && (
          <div className="overlay">
            <div className="overlay-content side-layout">
              <button
                className="close-btn"
                onClick={() => setSelectedMember(null)}
              >
                ✖
              </button>
              <div className="overlay-left">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="overlay-img"
                />
              </div>
              <div className="overlay-right">
                <h3>{selectedMember.name}</h3>
                <p className="designation">Designation: {selectedMember.designation}</p>
                <p className="email">Email: {selectedMember.email}</p>
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
