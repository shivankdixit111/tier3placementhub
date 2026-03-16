"use client";

import { useEffect, useState } from "react";
import VideoCall from "./VideoCall";

export default function InterviewUI({ type }) {

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");

  useEffect(() => {

    fetch(`/api/interview?type=${type}`)
      .then((res) => res.json())
      .then((data) => setQuestions(data));

  }, [type]);

  const next = () => {
    setCurrent(current + 1);
    setAnswer("");
  };

  if (!questions.length) return <p>Loading interview...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold text-center mb-6">
        Mock {type} Interview
      </h1>

      <VideoCall />

      <div className="max-w-3xl mx-auto mt-8 bg-white p-8 rounded-xl shadow">

        <h2 className="text-xl font-semibold mb-4">
          Question {current + 1}
        </h2>

        <p className="text-lg mb-6">
          {questions[current]}
        </p>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full border p-3 rounded"
          placeholder="Speak or type your answer..."
        />

        <button
          onClick={next}
          className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg"
        >
          Next Question
        </button>

      </div>

    </div>
  );
}