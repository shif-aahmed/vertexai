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
        <p className="intro-statement animate-on-scroll">
          We helped enterprises unlock a{" "}
          <span className="highlight-green">25% boost</span> in model performance using Vertex AI. Faster deployments. Smarter outcomes.
        </p>

        <div className="banner-content">
          <h1 className="animate-on-scroll">
            Leading your<br /> AI journey to success
          </h1>

          <div className="stats-separator animate-on-scroll"></div>

          <div className="banner-stats">
            {[
              { h3: "15+", p: "Years of AI-driven innovation" },
              { h3: "1000+", p: "ML & cloud transformation experts" },
              { h3: "500+", p: "AI Projects Successfully Delivered" },
              { h3: "94%", p: "Client Satisfaction in AI Solutions" },
              { h3: "40%", p: "Business Domains Transformed" },
            ].map((stat, i) => (
              <div key={i} className="stat-box animate-on-scroll">
                <h3>{stat.h3}</h3>
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
