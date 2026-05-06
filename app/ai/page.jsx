"use client";
import { useState, useRef, useEffect } from "react";

export default function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! Welcome to Tier3PlacementHub AI Assistant. Ask coding questions, DSA problems, or anything about your preparation journey.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!question.trim()) return;

    const userMessage = { sender: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      const botMessage = { sender: "bot", text: data.answer || "No response from AI" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error fetching AI response. Please try again." },
      ]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white p-6 pl-8 pb-10">
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-6 text-center drop-shadow-lg">
        Tier3PlacementHub AI Assistant
      </h1>

      {/* Chat container */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-900/50 rounded-3xl shadow-inner space-y-4 scrollbar-thin scrollbar-thumb-indigo-700 scrollbar-track-gray-800">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="w-10 h-10 bg-purple-600 flex items-center justify-center rounded-full text-lg font-bold">
                🤖
              </div>
            )}
            <div
                className={`max-w-[75%] px-5 py-3 rounded-lg ${
                    msg.sender === "user"
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-white text-gray-900 rounded-bl-none shadow"
                }`}
                style={{ whiteSpace: "pre-wrap" }} // <- add this
                > 
              {msg.text}
            </div>
            {msg.sender === "user" && (
              <div className="w-10 h-10 bg-indigo-500 flex items-center justify-center rounded-full text-lg font-bold">
                🧑
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-3 justify-start">
            <div className="w-10 h-10 bg-purple-600 flex items-center justify-center rounded-full text-lg font-bold">
              🤖
            </div>
            <div className="max-w-[60%] px-5 py-3 rounded-2xl bg-gray-800 animate-pulse">
              Typing...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-3 mt-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyPress}
          rows={1}
          placeholder="Type your question..."
          className="flex-1 p-4 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white placeholder-gray-400"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 px-6 py-3 rounded-2xl hover:bg-purple-700 transition-all font-semibold"
        >
          Send
        </button>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-slide-right {
          animation: slideRight 0.3s ease;
        }
        .animate-slide-left {
          animation: slideLeft 0.3s ease;
        }
        @keyframes slideRight {
          0% {
            transform: translateX(20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideLeft {
          0% {
            transform: translateX(-20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}