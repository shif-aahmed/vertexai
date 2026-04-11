import React, { useState, useEffect } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./OurTeam.css";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";


const teamMembers = [
  {
    id: 1,
    name: "Alex Carter",
    designation: "Chief Executive Officer",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: 2,
    name: "Sophia Bennett",
    designation: "Chief Operating Officer",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=2",
  },
  {
    id: 3,
    name: "Daniel Brooks",
    designation: "Chief Technology Officer",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=3",
  },
  {
    id: 4,
    name: "Liam Parker",
    designation: "Director",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=4",
  },
  {
    id: 5,
    name: "Olivia Morgan",
    designation: "Director",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 6,
    name: "Ethan Collins",
    designation: "HR Manager",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=6",
  },
  {
    id: 7,
    name: "Mia Richardson",
    designation: "HR Executive",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=7",
  },
  {
    id: 8,
    name: "Noah Mitchell",
    designation: "UI/UX Designer",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=8",
  },
  {
    id: 9,
    name: "Ava Thompson",
    designation: "React Native Engineer",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=9",
  },
  {
    id: 10,
    name: "Lucas Walker",
    designation: "AI/ML Intern",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=10",
  },
  {
    id: 11,
    name: "Emily Turner",
    designation: "AI/ML Intern",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    id: 12,
    name: "James Foster",
    designation: "AI/ML Intern",
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    twitter: "https://twitter.com/example",
    image: "https://i.pravatar.cc/300?img=12",
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
            className={`heading heading-animated ${animateHeading ? "animate" : ""}`}
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

                  {/* Instagram + Twitter only for IDs 1, 2, 4, 5 */}
                  {[1, 2, 4, 5].includes(selectedMember.id) && (
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
