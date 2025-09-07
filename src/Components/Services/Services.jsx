import React, { useEffect, useRef, useState } from "react";
import {
  FaLightbulb,
  FaCogs,
  FaBrain,
  FaChartLine,
  FaRocket,
  FaHandsHelping,
} from "react-icons/fa";
import "./Services.css";

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
  },
];

const Services = () => {
  const cardsRef = useRef([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can we help you today?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Intersection Observer for cards
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

    // Letter-by-letter animation for Services Heading
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

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    setMessages((prev) => [...prev, { text: inputMessage, sender: "user" }]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("https://your-api-endpoint.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();
      const botReply = data.reply || "Sorry, I couldn't process that right now.";
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "There was an error connecting to the server.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => e.key === "Enter" && handleSendMessage();

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
            >
              <div className="service-icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <ul>
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <button className="chat-button" onClick={toggleChat}>
        Chat with Us
      </button>

      <div className={`chatbot-container ${isChatOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <h3>Vertex AI</h3>
          <button className="close-chat" onClick={toggleChat}>
            ×
          </button>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
          {isLoading && <div className="message bot">Typing...</div>}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSendMessage} disabled={isLoading}>
            {isLoading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
