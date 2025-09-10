import React, { useEffect } from "react";
import "./AboutSection.css";
import aboutImg from "../../assets/images/about-img.jpg"; // imported image

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
          <h2>About Vertex AI Tec</h2>
          <p>
 At Vertex AI Tec, we are a team of dedicated and skilled professionals committed to transforming your ideas into innovative digital solutions. We strive to empower businesses by leveraging cutting-edge AI technologies and modern frameworks to build efficient, user-friendly applications. Our experts work with passion, creativity, and precision, ensuring every project achieves maximum impact and client satisfaction. Partner with us today and discover how Vertex AI Tec can accelerate your digital success.
          </p>
        </div>

        <div className="about-image">
<img 
  src={aboutImg} 
  alt="Vertex AI Tech" 
  loading="lazy" 
  style={{ maxWidth: '100%', height: 'auto' }} 
/>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
