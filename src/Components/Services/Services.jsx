import React, { useEffect, useRef } from "react";
import {
  FaLightbulb,
  FaCogs,
  FaBrain,
  FaChartLine,
  FaRocket,
  FaHandsHelping,
} from "react-icons/fa";
import "./Services.css";
import img from "../../assets/images/image-element2.jpg"

const servicesData = [
  {
    title: "Advisory",
    icon: <FaLightbulb />,
    items: [
      "AI Readiness Assessment",
      "Use Case Discovery",
      "Model Feasibility Study",
      "AI Strategy Consulting",
      "Prompt Engineering",
      "AI-Driven Transformation",
    ],
    bgImage: img,
  },
  {
    title: "Engineering",
    icon: <FaCogs />,
    items: [
      "ML Model Development",
      "Vertex AI Pipelines",
      "Model Optimization",
      "Proof of Concept (PoC)",
      "AI-Powered Applications",
      "Cloud AI Solutions",
      "Vertex AI Deployment",
      "Web Development",
    ],
    bgImage: img,
  },
  {
    title: "Artificial Intelligence",
    icon: <FaBrain />,
    items: [
      "Generative AI Agents",
      "Vertex AI Workshops",
      "AI MVP Development",
      "Custom Foundation Models",
      "Training & Fine-Tuning",
      "Managed MLOps",
      "Vertex AI Studio",
      "Web Designing",
      "UI/UX Design",
    ],
    bgImage: img,
  },
  {
    title: "Optimization",
    icon: <FaChartLine />,
    items: [
      "Model Evaluation & Audit",
      "AI Accuracy Testing",
      "Monitoring & Drift Detection",
      "Marketing & Growth Analysis",
    ],
    bgImage: img,
  },
  {
    title: "Deployment & Integration",
    icon: <FaRocket />,
    items: [
      "Seamless AI Deployment",
      "API & SDK Integration",
      "Cloud-Native Deployment",
      "Vertex AI CI/CD Pipelines",
      "Third-Party Service Integration",
    ],
    bgImage: img,
  },
  {
    title: "Support & Maintenance",
    icon: <FaHandsHelping />,
    items: [
      "24/7 AI System Monitoring",
      "Troubleshooting & Bug Fixes",
      "Performance Enhancements",
      "Long-Term Maintenance",
      "Dedicated Support Team",
    ],
    bgImage: img,
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    const heading = document.querySelector(".services-heading");
    if (heading) {
      const text = heading.textContent;
      heading.textContent = "";
      text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.opacity = 0;
        span.style.display = "inline-block";
        span.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
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
    <section className="services" id="services">
      <h2 className="services-heading">Our Services</h2>

      <div className="services-grid">
        {servicesData.map((service, index) => {
          let animationClass = "from-bottom";
          if (window.innerWidth >= 1000) {
            animationClass =
              index % 3 === 0
                ? "from-left"
                : index % 3 === 2
                ? "from-right"
                : "from-bottom";
          } else if (window.innerWidth >= 768) {
            animationClass = index % 2 === 0 ? "from-left" : "from-right";
          } else {
            animationClass = index % 2 === 0 ? "from-left" : "from-right";
          }

          return (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`service-card ${animationClass}`}
              style={{ backgroundImage: `url(${service.bgImage})` }} // ✅ fixed
            >
              <div className="overlay"></div>
              <div className="card-content">
                <div className="service-icon">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
                <ul>
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
