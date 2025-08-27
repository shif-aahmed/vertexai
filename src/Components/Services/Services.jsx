import React, { useState } from "react";
import { FaLightbulb, FaCogs, FaBrain, FaChartLine } from "react-icons/fa";
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
      "Web Development", // Added
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
      "Web Designing", // Added
      "UI/UX Design", // Added
    ],
  },
  {
    title: "Optimization",
    icon: <FaChartLine />,
    items: [
      "Model Evaluation & Audit",
      "AI Accuracy Testing",
      "Monitoring & Drift Detection",
      "Marketing", // Added
    ],
  }
];

const Services = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can we help you today?", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const userMessage = { text: inputMessage, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("https://your-api-endpoint.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <section className="services" id="services">
      <h2 className="services-heading">Our Services</h2>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h4>{service.title}</h4>
            <ul>
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Chat Button */}
      <button className="chat-button" onClick={toggleChat}>
        Chat with Us
      </button>

      {/* Chat Bot */}
      <div className={`chatbot-container ${isChatOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h3>Vertex AI</h3>
          <button className="close-chat" onClick={toggleChat}>×</button>
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
