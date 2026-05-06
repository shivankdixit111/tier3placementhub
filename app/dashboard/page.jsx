"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-700">
          🎓 Student Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Coding Progress */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <p className="font-semibold text-lg mb-2">💻 Coding Progress</p>
          <div className="bg-gray-200 w-full h-5 rounded-full overflow-hidden">
            <div className="bg-indigo-500 h-5 w-4/5"></div>
          </div>
          <p className="text-sm mt-2 text-gray-600">80% completed</p>
        </div>

        {/* Aptitude */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <p className="font-semibold text-lg mb-2">🧮 Aptitude Progress</p>
          <div className="bg-gray-200 w-full h-5 rounded-full overflow-hidden">
            <div className="bg-green-500 h-5 w-3/5"></div>
          </div>
          <p className="text-sm mt-2 text-gray-600">60% completed</p>
        </div>

        {/* Mock Interviews */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <p className="font-semibold text-lg mb-2">📝 Mock Interviews</p>
          <p className="text-3xl font-bold text-indigo-600">5</p>
        </div>

        {/* Upcoming Exam */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border">
          <p className="font-semibold text-lg mb-2">📅 Upcoming Exam</p>
          <p className="text-xl font-bold text-purple-600">TCS NQT</p>
        </div>

      </div>

    </div>
  );
}