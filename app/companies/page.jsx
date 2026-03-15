"use client";

import React from "react";

export default function Companies() {
  const companies = [
    { company: "TCS", exam: "NQT", date: "June 2026" },
    { company: "Infosys", exam: "INFYTQ", date: "July 2026" },
    { company: "Deloitte", exam: "NLA", date: "July 2026" },
    { company: "Wipro", exam: "WASE", date: "August 2026" },
    { company: "Accenture", exam: "ASE", date: "August 2026" },
    { company: "Cognizant", exam: "Coding Test", date: "September 2026" },
    { company: "Capgemini", exam: "Engage Test", date: "September 2026" },
    { company: "Tech Mahindra", exam: "Tech Exam", date: "October 2026" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-6">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-indigo-700">
        Upcoming Company Exams 🚀
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
        Stay ahead in your placement preparation! Check the upcoming exams of top companies and plan your preparation accordingly.
      </p>

      {/* Table for large screens */}
      <div className="hidden md:block max-w-6xl mx-auto overflow-x-auto">
        <table className="table-auto border-collapse w-full bg-white shadow-xl rounded-2xl overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-5 text-left">Company</th>
              <th className="p-5 text-left">Exam</th>
              <th className="p-5 text-left">Expected Date</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c, i) => (
              <tr
                key={i}
                className="border-b hover:bg-indigo-50 transition duration-200 cursor-pointer"
              >
                <td className="p-5 font-semibold text-gray-800">{c.company}</td>
                <td className="p-5 text-gray-700">{c.exam}</td>
                <td className="p-5">
                  <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium">
                    {c.date}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for small screens */}
      <div className="md:hidden flex flex-col gap-6 max-w-2xl mx-auto">
        {companies.map((c, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-indigo-300 transition transform hover:-translate-y-2 border border-indigo-100"
          >
            <h3 className="text-2xl font-bold text-indigo-600">{c.company}</h3>
            <p className="text-gray-700 mt-3">
              <span className="font-semibold">Exam:</span> {c.exam}
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Expected Date:</span>{" "}
              <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full font-medium">
                {c.date}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}