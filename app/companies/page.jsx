import React from "react";

export default function Companies() {
  const companies = [
    { company: "TCS", exam: "NQT", date: "Aug 2026" },
    { company: "Infosys", exam: "INFYTQ", date: "Sep 2026" },
    { company: "Deloitte", exam: "NLA", date: "Oct 2026" },
    { company: "Wipro", exam: "WASE", date: "Nov 2026" },
    { company: "Accenture", exam: "ASE", date: "Dec 2026" },
    { company: "Cognizant", exam: "COGNIZANT Coding", date: "Nov 2026" },
    { company: "Capgemini", exam: "Engage Test", date: "Dec 2026" },
    { company: "Tech Mahindra", exam: "Tech Exam", date: "Jan 2027" },
  ];

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Upcoming Company Exams
      </h1>

      {/* Table for large screens */}
      <div className="hidden md:block max-w-6xl mx-auto overflow-x-auto">
        <table className="table-auto border-collapse w-full bg-white shadow-lg rounded-xl overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Exam</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c, i) => (
              <tr
                key={i}
                className="border-b hover:bg-indigo-50 transition duration-200"
              >
                <td className="p-4 font-medium text-gray-800">{c.company}</td>
                <td className="p-4 text-gray-700">{c.exam}</td>
                <td className="p-4 text-gray-700">{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for small screens */}
      <div className="md:hidden flex flex-col gap-4 max-w-2xl mx-auto">
        {companies.map((c, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-indigo-300 transition transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-indigo-600">{c.company}</h3>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Exam:</span> {c.exam}
            </p>
            <p className="text-gray-700 mt-1">
              <span className="font-semibold">Date:</span> {c.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}