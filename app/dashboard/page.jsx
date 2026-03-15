export default function Dashboard() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
        🎓 Student Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Coding Progress Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition">
          <p className="font-semibold text-lg mb-2">💻 Coding Progress</p>
          <div className="bg-gray-200 w-full h-5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-5 w-4/5 rounded-full transition-all duration-500"></div>
          </div>
          <p className="text-sm mt-2 text-gray-600">80% completed</p>
        </div>

        {/* Aptitude Progress Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition">
          <p className="font-semibold text-lg mb-2">🧮 Aptitude Progress</p>
          <div className="bg-gray-200 w-full h-5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-green-400 to-teal-500 h-5 w-3/5 rounded-full transition-all duration-500"></div>
          </div>
          <p className="text-sm mt-2 text-gray-600">60% completed</p>
        </div>

        {/* Mock Interviews Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition flex flex-col justify-between">
          <p className="font-semibold text-lg mb-4">📝 Mock Interviews</p>
          <p className="text-indigo-600 text-3xl font-bold">5</p>
          <p className="text-gray-500 mt-2 text-sm">Completed</p>
        </div>

        {/* Upcoming Exam Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition flex flex-col justify-between">
          <p className="font-semibold text-lg mb-4">📅 Upcoming Exam</p>
          <p className="text-purple-600 text-2xl font-bold">TCS NQT</p>
          <p className="text-gray-500 mt-2 text-sm">Next week</p>
        </div>
      </div>

      {/* Optional motivational message */}
      <div className="mt-10 bg-indigo-50 p-6 rounded-2xl shadow-inner text-center text-indigo-700 text-lg font-medium">
        🚀 Keep up the great work! Consistency is the key to cracking TCS NQT and Tier3 Placements.
      </div>
    </div>
  );
}