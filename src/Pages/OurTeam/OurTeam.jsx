import React, { useState, useEffect } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./OurTeam.css";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import ceo from "../../assets/images/ceo.png";
import cto from "../../assets/images/cto.png";
import stakeholder from "../../assets/images/stakeholder.jpg";
import hrManager from "../../assets/images/hr-manager.png";
import hrExecutive from "../../assets/images/hr-executive.png";
import pm from "../../assets/images/pm.png";
import UI from "../../assets/images/ui-ux-manager.png";
import reactNative from "../../assets/images/react-native-engineer.png";
import aiIntern from "../../assets/images/ai-intern.png";
import aiIntern2 from "../../assets/images/ai-intern2.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Daud Ali",
    designation: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/daud-ali-0006a532a/",
    instagram: "https://www.instagram.com/daud.alivertexai?utm_source=qr&igsh=N3V0MDdhY2FrMjkx",
    twitter: "https://twitter.com/example",
    image: ceo,
  },
  {
    id: 2,
    name: "Umair Manzoor",
    designation: "Director",
    linkedin: "https://linkedin.com/in/bob",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: stakeholder,
  },
  {
    id: 3,
    name: "Rizwan Shehzad",
    designation: "Chief Technology Officer",
    linkedin: "https://www.linkedin.com/in/rizwan-shehzad-80b357166/",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: cto,
  },
  {
    id: 4,
    name: "Aroob Tahir",
    designation: "HR Manager",
    linkedin: "http://www.linkedin.com/in/aroob-tahir-249526184",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: hrManager,
  },
  {
    id: 5,
    name: "Naima Zahir",
    designation: "HR Executive",
    linkedin: "http://www.linkedin.com/in/naeema-zahir-092257326",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: hrExecutive,
  },
  {
    id: 6,
    name: "Noraiz Choudhary",
    designation: "Project Manager",
    linkedin: "https://www.linkedin.com/in/noraiz-choudhary-295734385/",
    instagram: "https://www.instagram.com/noraiz.vertexai/",
    twitter: "https://x.com/NoraizVertexai",
    image: pm,
  },
  {
    id: 7,
    name: "Muhammad Danish",
    designation: "UI/UX Designer",
    linkedin: "https://linkedin.com/in/george",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: UI,
  },
  {
    id: 8,
    name: "Muhammad Abdullah",
    designation: "React Native Engineer",
    linkedin: "https://linkedin.com/in/hannah",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: reactNative,
  },
  {
    id: 9,
    name: "Alishba Abbas",
    designation: "AI/ML Intern",
    linkedin: "https://linkedin.com/in/hannah",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: aiIntern,
  },
  {
    id: 10,
    name: "Ahmed Noor",
    designation: "AI/ML Intern",
    linkedin: "https://linkedin.com/in/hannah",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: aiIntern2,
  },
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heading = document.querySelector(".heading-animated");
      if (heading) {
        const rect = heading.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setAnimateHeading(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <h2
            className={`heading heading-animated ${
              animateHeading ? "animate" : ""
            }`}
          >
            {"Meet the Team".split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
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
                <p className="designation">{selectedMember.designation}</p>

                <div className="social-icons">
                  {/* LinkedIn always visible */}
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={23} />
                  </a>

                  {/* Instagram + Twitter only for IDs 1, 2, 6 */}
                  {[1, 2, 6].includes(selectedMember.id) && (
                    <>
                      <a
                        href={selectedMember.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={23} />
                      </a>
                      <a
                        href={selectedMember.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaXTwitter size={23} />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
