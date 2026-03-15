"use client";

import React from "react";
import Link from "next/link";

const exams = [
  { 
    name: "TCS NQT", 
    path: "/preparation/tcs-nqt", 
    expectedDate: "March - April, 2026" 
  },
  { 
    name: "Infosys INFYTQ", 
    path: "/preparation/infosys-infytq", 
    expectedDate: "April , 2026" 
  },
  { 
    name: "Deloitte NLA", 
    path: "/preparation/deloitte-nla", 
    expectedDate: "January - February, 2026" 
  },
  { 
    name: "Wipro WASE", 
    path: "/preparation/wipro-wase", 
    expectedDate: "August-September, 2026" 
  },
  { 
    name: "Accenture ASE", 
    path: "/preparation/accenture-ase", 
    expectedDate: "October-November, 2026" 
  },
];

export default function Preparation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 text-center">
        🚀 Exam Preparation Hub
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Click on any exam card to view its full syllabus, roadmap, recommended resources, and mock interview preparation. 
        Stay ahead and ace your placements!
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {exams.map((exam, idx) => (
          <Link
            href={exam.path}
            key={idx}
            className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-indigo-400 transition transform hover:-translate-y-3 border border-indigo-100 flex flex-col justify-between hover:bg-indigo-50"
          >
            <div>
              <h2 className="text-3xl font-bold text-indigo-600 mb-3">{exam.name}</h2>
              <p className="text-gray-700 mb-4">
                Expected Exam Date: <span className="font-semibold text-indigo-800">{exam.expectedDate}</span>
              </p>
              <p className="text-gray-500">
                Prepare with a structured syllabus, roadmap, and curated resources for maximum success.
              </p>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block px-6 py-2 bg-indigo-600 text-white font-medium rounded-full shadow hover:bg-purple-600 transition">
                View Details
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}