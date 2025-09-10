import React from "react";
import "./TeamSection.css";

// Dummy data — replace with real members later
const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Michael Smith",
    role: "Lead AI Engineer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Sophia Lee",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "David Kim",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

const IconLink = ({ href, children, label }) => (
  <a className="glass-icon" href={href} target="_blank" rel="noreferrer" aria-label={label}>
    {children}
  </a>
);

const TeamSection = () => {
  return (
    <section className="team-glass-section" aria-labelledby="team-heading">
      {/* Animated background layer */}
      <div className="bg-animated">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <canvas className="stars" aria-hidden="true" />
      </div>

      <div className="container">
        <header className="team-head">
          <h2 id="team-heading">Meet the Team</h2>
        <p>
          The people behind <span className="accent">Vertex AI Tech</span> —
          building the future of AI with passion, creativity, and innovation.
        </p>
        </header>

        <div className="grid">
          {teamMembers.map((m, i) => (
            <article className="glass-card" key={i}>
              <div className="avatar-wrap">
                <img src={m.image} alt={`${m.name}`} className="avatar" />
              </div>

              <div className="card-body">
                <h3 className="name">{m.name}</h3>
                <p className="role">{m.role}</p>

                <div className="socials" aria-hidden={false}>
                  <IconLink href={m.linkedin} label={`${m.name} LinkedIn`}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.3 2.4-2.3 4-2.3 4.3 0 5.1 2.9 5.1 6.7V24H17v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H8z"/></svg>
                  </IconLink>

                  <IconLink href={m.twitter} label={`${m.name} Twitter`}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-0.6 1.8-1.6 2.2-2.8-1 .6-2 .9-3.1 1.2C19 2 17.7 1.5 16.3 1.5c-2.5 0-4.5 2-4.5 4.5 0 .4 0 .8.1 1.1C8.2 7 4.3 5 1.7 2.3c-.5.8-.8 1.8-.8 2.9 0 1.6.8 3.1 2.1 4-0.8 0-1.6-.2-2.3-.6 0 2.1 1.5 3.9 3.4 4.3-.6.2-1.3.2-1.9.1.5 1.7 2 2.9 3.8 2.9-1.4 1.1-3.1 1.7-4.9 1.7H0c1.8 1.2 3.9 1.9 6.2 1.9 7.4 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2.1-2.1-.7.3-1.4.5-2.1.6z"/></svg>
                  </IconLink>

                  <IconLink href={m.github} label={`${m.name} GitHub`}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.8 5.4.8 11.8c0 4.8 3.1 8.8 7.4 10.2.5.1.6-.2.6-.4v-1.6c-3 0-3.6-1.3-3.8-2.5-.1-.3-.7-1.2-1.2-1.5-.4-.2-1-.7 0-.7 0 0 .8.1 1.4.8.8.8 2.3.6 2.9.4.1-.7.3-1.2.6-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2.9-.3 1.9-.5 2.9-.5 1 0 1.9.2 2.9.5 2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.7.9 1.2 2 1.2 3.2 0 4.6-2.8 5.5-5.3 5.8.3.3.5.7.5 1.5v2.2c0 .2.2.5.6.4 4.3-1.4 7.4-5.5 7.4-10.2C23.2 5.4 18.3.5 12 .5z"/></svg>
                  </IconLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
