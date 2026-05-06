"use client";

import React from "react";

export default function Companies() {
  const companies = [
    {
      company: "TCS",
      role: "Ninja / Digital / Prime Hiring",
      type: "Service Based",
      desc: "Largest IT service company in India hiring freshers through NQT and mass recruitment drives.",
      date: "June 2026",
      hiring: "≈ 25,000+"
    },
    {
      company: "Infosys",
      role: "Specialist Programmer / INFYTQ",
      type: "Service Based",
      desc: "Strong structured hiring with coding + aptitude assessments for freshers.",
      date: "July 2026",
      hiring: "≈ 15,000+"
    },
    {
      company: "Deloitte",
      role: "Analyst",
      type: "Consulting",
      desc: "Top consulting firm focusing on aptitude, reasoning and communication skills.",
      date: "July 2026",
      hiring: "≈ 2,000–3,000"
    },
    {
      company: "Wipro",
      role: "Project Engineer / WASE",
      type: "Service Based",
      desc: "Mass recruiter focusing on aptitude, basic coding and communication skills.",
      date: "August 2026",
      hiring: "≈ 8,000–10,000"
    },
    {
      company: "Accenture",
      role: "ASE",
      type: "Service Based",
      desc: "Strong focus on coding, aptitude and communication-based hiring process.",
      date: "August 2026",
      hiring: "≈ 10,000–12,000"
    },
    {
      company: "Cognizant",
      role: "GenC / GenC Elevate",
      type: "Service Based",
      desc: "Hiring through coding assessment and technical interviews for freshers.",
      date: "September 2026",
      hiring: "≈ 7,000–9,000"
    },
    {
      company: "Capgemini",
      role: "Analyst / Engineer",
      type: "Service Based",
      desc: "Includes aptitude, technical test and HR interview rounds.",
      date: "September 2026",
      hiring: "≈ 5,000–7,000"
    },
    {
      company: "Tech Mahindra",
      role: "ASE",
      type: "Service Based",
      desc: "Focus on communication skills and basic technical knowledge.",
      date: "October 2026",
      hiring: "≈ 3,000–5,000"
    }
  ];

  const getTypeColor = (type) => {
    if (type === "Consulting") return "bg-blue-100 text-blue-700";
    return "bg-green-100 text-green-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6">

      {/* HEADER */}
      <h1 className="text-5xl font-extrabold text-center mb-4 text-indigo-700">
        🏢 Top Hiring Companies in India
      </h1>

      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Explore top IT companies, their hiring scale, and prepare strategically for placements.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {companies.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-lg border border-indigo-100 p-6 
                       hover:shadow-indigo-300 transition transform hover:-translate-y-2"
          >

            {/* HEADER */}
            <div className="flex items-center gap-4 mb-4">

              <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                {c.company[0]}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-indigo-700">
                  {c.company}
                </h2>
                <p className="text-sm text-gray-500">{c.role}</p>
              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm mb-4">
              {c.desc}
            </p>

            {/* INFO ROW */}
            <div className="space-y-2 text-sm">

              <p>
                📅 Expected: <span className="font-medium text-indigo-700">{c.date}</span>
              </p>

              <p>
                👥 Hiring: <span className="font-semibold text-indigo-700">{c.hiring}</span>
              </p>

            </div>

            {/* TAG */}
            <div className="mt-4 flex justify-between items-center">

              <span className={`text-xs px-3 py-1 rounded-full font-medium ${getTypeColor(c.type)}`}>
                {c.type}
              </span>

              <span className="text-xs text-gray-400">
                Fresher Drive
              </span>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}