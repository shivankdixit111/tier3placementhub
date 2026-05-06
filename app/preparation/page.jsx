"use client";

import React from "react";
import Link from "next/link";

const exams = [
  { 
    name: "TCS NQT", 
    path: "/preparation/tcs-nqt", 
    expectedDate: "March - April, 2026",
    role: "Ninja / Digital / Prime",
    difficulty: "Medium",
    stages: "Aptitude → Coding → Interview"
  },
  { 
    name: "TCS CodeVita", 
    path: "/preparation/tcs-codevita", 
    expectedDate: "Sept - Dec, 2026",
    role: "Global Coding Contest",
    difficulty: "Hard",
    stages: "Coding Contest → Final Round"
  },
  { 
    name: "Infosys INFYTQ", 
    path: "/preparation/infosys-infytq", 
    expectedDate: "April, 2026",
    role: "Specialist Programmer",
    difficulty: "Hard",
    stages: "MCQ → Coding → Interview"
  },
  { 
    name: "Infosys HackWithInfy", 
    path: "/preparation/hackwithinfy", 
    expectedDate: "Feb - August, 2026",
    role: "Power Programmer",
    difficulty: "Hard",
    stages: "Contest → Interview"
  },
  { 
    name: "Deloitte NLA", 
    path: "/preparation/deloitte-nla", 
    expectedDate: "Jan - Feb, 2026",
    role: "Analyst",
    difficulty: "Medium",
    stages: "Aptitude → Interview"
  },
  { 
    name: "Wipro WASE", 
    path: "/preparation/wipro-wase", 
    expectedDate: "Aug - Sept, 2026",
    role: "Project Engineer",
    difficulty: "Medium",
    stages: "Aptitude → Coding → Interview"
  },
  { 
    name: "Accenture ASE", 
    path: "/preparation/accenture-ase", 
    expectedDate: "Oct - Nov, 2026",
    role: "Associate Software Engineer",
    difficulty: "Medium",
    stages: "Aptitude → Coding → Communication → Interview"
  },
  { 
    name: "Capgemini", 
    path: "/preparation/capgemini", 
    expectedDate: "Rolling Hiring",
    role: "Analyst / Engineer",
    difficulty: "Medium",
    stages: "Aptitude → Coding → Interview"
  },
  { 
    name: "Cognizant (GenC)", 
    path: "/preparation/cognizant", 
    expectedDate: "Sept - Oct, 2026",
    role: "GenC / Elevate",
    difficulty: "Medium",
    stages: "Aptitude → Coding → Interview"
  },
  { 
    name: "HCLTech", 
    path: "/preparation/hcltech", 
    expectedDate: "Rolling",
    role: "GET",
    difficulty: "Easy-Medium",
    stages: "Aptitude → Technical → HR"
  },
  { 
    name: "Tech Mahindra", 
    path: "/preparation/techmahindra", 
    expectedDate: "Rolling",
    role: "Associate Engineer",
    difficulty: "Easy-Medium",
    stages: "Aptitude → Interview"
  }
];

const getDifficultyColor = (difficulty) => {
  if (difficulty === "Hard") return "bg-red-100 text-red-600";
  if (difficulty === "Easy-Medium") return "bg-green-100 text-green-600";
  return "bg-yellow-100 text-yellow-700";
};

export default function Preparation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
      
      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
          🚀 Placement Preparation Hub
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Crack top product & service companies with structured roadmaps, real interview questions, and curated resources.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        
        {exams.map((exam, idx) => (
          <Link key={idx} href={exam.path} className="group">

            <div className="relative bg-white rounded-3xl p-6 shadow-lg border border-gray-100 
              hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 
              overflow-hidden">

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 opacity-0 group-hover:opacity-10 transition"></div>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* Title */}
                <h2 className="text-2xl font-bold text-indigo-700 mb-3 group-hover:text-purple-700 transition">
                  {exam.name}
                </h2>

                {/* Date */}
                <p className="text-sm text-gray-500 mb-3">
                  📅 {exam.expectedDate}
                </p>

                {/* Role */}
                <p className="text-sm text-gray-700 mb-2">
                  🎯 <span className="font-semibold">Role:</span> {exam.role}
                </p>

                {/* Stages */}
                <p className="text-sm text-gray-700 mb-3">
                  ⚙️ <span className="font-semibold">Process:</span> {exam.stages}
                </p>

                {/* Difficulty Badge */}
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(exam.difficulty)}`}>
                  {exam.difficulty}
                </span>

                {/* CTA */}
                <div className="mt-6">
                  <button className="w-full py-2 rounded-xl bg-indigo-600 text-white font-medium 
                    group-hover:bg-purple-600 transition-all duration-300">
                    Start Preparation →
                  </button>
                </div>

              </div>
            </div>

          </Link>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="mt-16 text-center text-gray-600">
        💡 Tip: Focus on consistency over intensity. Daily 2–3 hours can beat random 10-hour sessions.
      </div>
    </div>
  );
}