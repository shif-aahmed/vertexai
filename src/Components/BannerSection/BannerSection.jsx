import React, { useEffect } from "react";
import "./BannerSection.css";

const BannerSection = () => {
  useEffect(() => {
    // Animate elements on scroll
    const bannerElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    bannerElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="banner-container">
      <section className="banner-section animate-background">
        <div className="banner-content">
          <h1 className="animate-on-scroll">
            Leading your<br /> AI journey to success
          </h1>
          <p className="intro-statement animate-on-scroll">
            We helped enterprises unlock a{" "}
            <span className="highlight-green">25% boost</span> in model performance using Vertex AI. Faster deployments. Smarter outcomes.
          </p>
          <div className="stats-separator animate-on-scroll"></div>

          <div className="banner-stats">
            {[
              { p: "Years of AI-driven innovation" },
              { p: "ML & cloud transformation experts" },
              { p: "AI Projects Successfully Delivered" },
              { p: "Client Satisfaction in AI Solutions" },
              { p: "Business Domains Transformed" },
            ].map((stat, i) => (
              <div key={i} className="stat-box animate-on-scroll">
                <p>{stat.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
