// FAQSection.jsx
import React, { useState, useEffect } from "react";
import "./FAQSection.css";

const faqData = [
  {
    question: "Which kind of web or mobile applications have you developed for clients?",
    answer: "We have developed custom web and mobile applications including e-commerce platforms, SaaS solutions, mobile apps for Android and iOS, and internal business tools tailored to client needs."
  },
  {
    question: "Can I see what you’ve developed for your clients?",
    answer: "Yes! We can provide case studies and live demos of our previous projects upon request."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern technologies including React, Node.js, Angular, PHP, Python, MySQL, and cloud platforms like AWS and Azure."
  },
  {
    question: "How do you measure the success of your development projects?",
    answer: "Success is measured through client satisfaction, performance metrics, on-time delivery, and meeting the project’s goals."
  },
  {
    question: "How will you help me meet my goals?",
    answer: "We analyze your requirements thoroughly and provide custom solutions, regular updates, and consultative support to ensure your goals are achieved."
  },
  {
    question: "What deliverables can I expect from you after a specific time?",
    answer: "Deliverables include fully functional applications, documentation, source code, and deployment support, all according to agreed timelines."
  },
  {
    question: "How much will this project cost?",
    answer: "Pricing depends on project scope, complexity, and features. We provide detailed proposals after understanding your requirements."
  },
  {
    question: "What’s the estimated timeline?",
    answer: "The timeline varies depending on project complexity. Typical projects take 4-12 weeks from design to deployment."
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const faqItems = document.querySelectorAll(".faq-item");
    const handleScroll = () => {
      faqItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add("fade-in");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="faq-section">
      <h2 className="faq-title ">Frequently Asked <span>Questions</span></h2>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-toggle">{activeIndex === index ? "-" : "+"}</span>
              {item.question}
            </div>
            <div className="faq-answer">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
