"use client";
import { useState } from "react";

export default function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AI Assistant</h1>

      <input
        className="border p-3 w-full rounded"
        placeholder="Ask a coding question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={askAI}
        className="bg-indigo-600 text-white px-4 py-2 mt-4 rounded"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      <div className="mt-6 p-4 bg-gray-100 rounded min-h-[80px]">
        {answer || "AI answer will appear here"}
      </div>
    </div>
  );
}