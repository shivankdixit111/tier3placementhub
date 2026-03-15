"use client";

import { useState, useEffect } from "react";

export default function MockInterview() {
  const questions = [
    "Tell me about yourself",
    "Why should we hire you?",
    "What is DBMS?",
    "Explain Operating System",
    "Difference between stack and queue",
  ];

  const [current, setCurrent] = useState(0);
  const [history, setHistory] = useState([]);
  const [listening, setListening] = useState(false);
  const [userSpeech, setUserSpeech] = useState("");

  // Speech Recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  useEffect(() => {
    if (!recognition) return;

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      setUserSpeech(speech);
      setHistory((prev) => [
        ...prev,
        { question: questions[current], answer: `🤖 AI: Good! Here's a hint: ${speech.slice(0, 20)}... think more clearly.` },
      ]);
      speakAI(`Good! Here's a hint: ${speech.slice(0, 20)}... think more clearly.`);
      setCurrent(current + 1);
      setListening(false);
    };

    recognition.onerror = () => setListening(false);
  }, [current]);

  const startListening = () => {
    if (!recognition) return;
    setListening(true);
    recognition.start();
  };

  // Speech Synthesis
  const speakAI = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-8">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
        🎤 Mock Interview Call
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {history.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-indigo-300 transition transform hover:-translate-y-1"
          >
            <div className="md:w-1/2">
              <p className="font-semibold text-indigo-600 mb-2">Q: {item.question}</p>
            </div>
            <div className="md:w-1/2 bg-indigo-50 p-4 rounded-xl text-gray-800">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}

        {current < questions.length && (
          <div className="text-center mt-4">
            <p className="mb-4 font-semibold text-lg text-gray-700">
              🎯 Next Question: {questions[current]}
            </p>
            <button
              onClick={startListening}
              className={`${
                listening ? "bg-red-500" : "bg-indigo-600"
              } text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition transform`}
            >
              {listening ? "Listening..." : "Speak Your Answer"}
            </button>
          </div>
        )}

        {current === questions.length && (
          <div className="text-center text-green-700 font-semibold text-xl mt-6">
            🎉 You have completed the mock interview!
          </div>
        )}
      </div>
    </div>
  );
}