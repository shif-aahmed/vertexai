import React, { useState } from "react";
import { FaHeadset } from "react-icons/fa";

import "./Chatbot.css";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can we help you today?", sender: "bot" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    <>
      {/* Floating button */}
      <button className="chat-button" onClick={toggleChat}>
  <FaHeadset size={24} />
      </button>

      {/* Chatbot Window */}
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
    </>
  );
};

export default Chatbot;
