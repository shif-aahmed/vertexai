import React, { useEffect } from "react";
import "./AboutSection.css";

const AboutSection = () => {
  useEffect(() => {
   
    // Scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutTextElements = document.querySelectorAll(".about-text p");
    aboutTextElements.forEach((el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
      observer.observe(el);
    });

// Letter by letter heading animation
const heading = document.querySelector(".about-text h2");
if (heading) {
  const text = heading.textContent;
  heading.textContent = "";
  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    // If character is space, use non-breaking space
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.opacity = 0;
    span.style.display = "inline-block";
    span.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
    span.style.transform = "translateY(20px)";
    heading.appendChild(span);
  });

  const spans = heading.querySelectorAll("span");
  const headingObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          spans.forEach((span) => {
            span.style.opacity = 1;
            span.style.transform = "translateY(0)";
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  headingObserver.observe(heading);
}

  }, []);

  return (
    <section className="about-wrapper" id="about">

      {/* About Content */}
      <div className="about-content" id="about-us">
        <div className="about-text">
          <h2>About Vertex AI Tech</h2>
          <p>
            At <strong>Vertex AI Tech</strong>, we deliver cutting-edge artificial intelligence solutions that help businesses work smarter and scale faster. From <strong>custom model development</strong> to <strong>machine learning deployment</strong>, scalable pipelines, AI agents, and enterprise-grade <strong>security</strong>, our team ensures seamless integration with your business goals.
          </p>
          <p>
            Leveraging the power of Google Cloud’s Vertex AI platform, we empower enterprises to accelerate innovation, boost productivity, and gain a competitive edge in today’s rapidly evolving market.
          </p>
        </div>

        <div className="about-image">
          <img
            src="src/assets/images/about-img.jpg"
            alt="Vertex AI Tech"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
