import React from "react"; 
import Link from 'next/link';


export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white py-32 px-6 text-center md:text-left md:px-20">
        <div className="max-w-4xl mx-auto md:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Empowering Tier-3 Students <br /> to Crack Placements
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-xl">
            Track company exams, prepare topics, practice interviews, and get AI guidance to plan your preparation efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/preparation"
              className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform text-center"
            >
              Start Preparing
            </Link>
            <Link
              href="/dashboard"
              className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-indigo-700 transition transform text-center"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Key Features
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-indigo-300 transition hover:-translate-y-2 transform" href='/ai'>
            <h3 className="text-xl font-bold mb-3 text-indigo-600">AI Preparation Assistant</h3>
            <p className="text-gray-600">Get personalized topic-wise guidance and AI tips for coding, aptitude, and interviews.</p>
          </Link>
          <Link className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-purple-300 transition hover:-translate-y-2 transform" href='/companies'>
            <h3 className="text-xl font-bold mb-3 text-purple-600">Company Exam Timeline</h3>
            <p className="text-gray-600">Stay updated with TCS NQT, Infosys INFYTQ, Deloitte NLA schedules and deadlines.</p>
          </Link>
          <Link className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-pink-300 transition hover:-translate-y-2 transform" href='/mock'>
            <h3 className="text-xl font-bold mb-3 text-pink-600">Mock Interviews</h3>
            <p className="text-gray-600">Practice real interview questions and track your performance in HR and technical rounds.</p>
          </Link>
          <Link className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-indigo-300 transition hover:-translate-y-2 transform" href='/dashboard'>
            <h3 className="text-xl font-bold mb-3 text-indigo-500">Progress Dashboard</h3>
            <p className="text-gray-600">Monitor your preparation, track strengths & weaknesses, and stay motivated.</p>
          </Link>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-indigo-700 text-white py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Placement Journey?
        </h2>
        <p className="max-w-2xl mx-auto mb-10">
          Join thousands of students preparing for top company placements with Tier3PlacementHub.
        </p>
        <Link
          href="/preparation"
          className="bg-white text-indigo-700 font-semibold px-10 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition transform"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-10 px-6 text-center">
        <p>&copy; 2026 Tier3PlacementHub. All rights reserved.</p>
      </footer>
    </div>
  );
}