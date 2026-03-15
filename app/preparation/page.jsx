import React from "react";
import Link from "next/link";

export default function Preparation() {
  const exams = [
    { name: "TCS NQT", path: "/preparation/tcs-nqt" },
    { name: "Infosys INFYTQ", path: "/preparation/infosys-infytq" },
    { name: "Deloitte NLA", path: "/preparation/deloitte-nla" },
    { name: "Wipro WASE", path: "/preparation/wipro-wase" },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-indigo-700">
        Exam Preparation Hub
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Click on an exam to view its full syllabus, roadmap, and recommended resources.
      </p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {exams.map((exam, idx) => (
          <Link
            href={exam.path}
            key={idx}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-indigo-300 transition transform hover:-translate-y-2 text-center"
          >
            <h2 className="text-2xl font-bold text-indigo-600">{exam.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}