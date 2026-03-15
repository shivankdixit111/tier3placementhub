"use client";

import React from "react";

const examData = {
  "tcs-nqt": {
    name: "TCS NQT",
    syllabus: {
      Aptitude: ["Time & Work", "Profit & Loss", "Percentage", "Ratio & Proportion"],
      "Verbal Reasoning": ["Sentence Completion", "Reading Comprehension", "Grammar"],
      "Advanced Quant": ["Probability", "Permutation & Combination", "Puzzles", "Data Interpretation"],
      Coding: ["Arrays", "Strings", "Linked List", "Recursion", "Dynamic Programming", "Sorting & Searching"],
    },
    roadmap: [
      "Week 1: Aptitude basics",
      "Week 2: Verbal reasoning practice",
      "Week 3: Advanced Quant practice",
      "Week 4: Coding fundamentals + Mock tests",
    ],
    resources: {
      Aptitude: [
        { name: "Online Study for You", link: "https://www.youtube.com/c/OnlineStudyForYou" },
        { name: "Campus Monk", link: "https://www.campusmonk.com/tcs-nqt" },
      ],
      "Verbal Reasoning": [
        { name: "ExamRace Verbal", link: "https://www.youtube.com/c/ExamRace" },
      ],
      "Advanced Quant": [
        { name: "Handa Ka Funda", link: "https://www.youtube.com/c/handakafunda" },
      ],
      Coding: [
        { name: "Pepcoding", link: "https://www.youtube.com/c/pepcoding" },
        { name: "CodeStudio", link: "https://www.codingninjas.com/codestudio" },
      ],
    },
  },
};

export default function ExamDetail({ params }) {
  const { examId } = params; // **Next.js App Router passes params here**
  const exam = examData[examId];

  if (!exam) {
    return (
      <div className="flex items-center justify-center h-screen text-center">
        <p className="text-2xl font-semibold text-red-500">
          Exam "{examId}" not found!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-12 text-center">
        {exam.name} - Full Syllabus 🚀
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Syllabus */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h2 className="text-3xl font-semibold text-purple-600 mb-5">📚 Syllabus</h2>
          {Object.keys(exam.syllabus).map((section, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-bold text-indigo-600 text-lg">{section}</h3>
              <ul className="list-disc list-inside text-gray-700 ml-2 mt-2 space-y-1">
                {exam.syllabus[section].map((topic, tidx) => (
                  <li key={tidx}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h2 className="text-3xl font-semibold text-purple-600 mb-5">🛣 Roadmap</h2>
          <ul className="list-decimal list-inside text-gray-700 space-y-2 ml-2">
            {exam.roadmap.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h2 className="text-3xl font-semibold text-purple-600 mb-5">🔗 Resources</h2>
          {Object.keys(exam.resources).map((section, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-bold text-indigo-600 text-lg">{section}</h3>
              <ul className="list-inside text-gray-700 space-y-1 ml-2">
                {exam.resources[section].map((res, ridx) => (
                  <li key={ridx}>
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-purple-600 hover:underline transition-colors"
                    >
                      {res.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-2xl shadow-inner text-center text-indigo-700 text-lg font-medium">
        🌟 Keep pushing forward! Consistency and practice are your keys to cracking {exam.name}.
      </div>
    </div>
  );
}