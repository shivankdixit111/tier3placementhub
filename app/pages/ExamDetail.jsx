import React from "react";
import { useParams } from "react-router-dom";

const examData = {
  "tcs-nqt": {
    name: "TCS NQT",
    syllabus: {
      "Aptitude": ["Time & Work", "Profit & Loss", "Percentage", "Ratio & Proportion"],
      "Verbal Reasoning": ["Sentence Completion", "Reading Comprehension", "Grammar"],
      "Advanced Quant": ["Probability", "Permutation & Combination", "Puzzles", "Data Interpretation"],
      "Coding": ["Arrays", "Strings", "Linked List", "Recursion", "Dynamic Programming", "Sorting & Searching"],
    },
    roadmap: [
      "Week 1: Aptitude basics",
      "Week 2: Verbal reasoning practice",
      "Week 3: Advanced Quant practice",
      "Week 4: Coding fundamentals + Mock tests",
    ],
    resources: {
      "Aptitude": [
        { name: "Online Study for You", link: "https://www.youtube.com/c/OnlineStudyForYou" },
        { name: "Campus Monk", link: "https://www.campusmonk.com/tcs-nqt" },
      ],
      "Verbal Reasoning": [
        { name: "ExamRace Verbal", link: "https://www.youtube.com/c/ExamRace" },
      ],
      "Advanced Quant": [
        { name: "Handa Ka Funda", link: "https://www.youtube.com/c/handakafunda" },
      ],
      "Coding": [
        { name: "Pepcoding", link: "https://www.youtube.com/c/pepcoding" },
        { name: "CodeStudio", link: "https://www.codingninjas.com/codestudio" },
      ],
    },
  },

  "infosys-infytq": {
    name: "Infosys INFYTQ",
    syllabus: {
      "Aptitude": ["Algebra", "Percentage", "Time & Distance", "Probability", "Data Interpretation"],
      "Verbal Reasoning": ["Reading Comprehension", "Para Jumbles", "Synonyms & Antonyms"],
      "Coding": ["Arrays", "Strings", "Recursion", "Sorting", "Graphs", "Dynamic Programming"],
    },
    roadmap: [
      "Week 1: Aptitude & Verbal basics",
      "Week 2: Coding fundamentals (Arrays & Strings)",
      "Week 3: Recursion & Sorting",
      "Week 4: Mock tests + Revision",
    ],
    resources: {
      "Aptitude": [
        { name: "Study Smart", link: "https://www.youtube.com/c/StudySmart" },
        { name: "Wiley Online Learning", link: "https://www.wileyindia.com" },
      ],
      "Verbal Reasoning": [
        { name: "ExamRace Verbal", link: "https://www.youtube.com/c/ExamRace" },
      ],
      "Coding": [
        { name: "GeeksforGeeks", link: "https://www.geeksforgeeks.org" },
        { name: "HackerRank Practice", link: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript" },
      ],
    },
  },

  "deloitte-nla": {
    name: "Deloitte NLA",
    syllabus: {
      "Aptitude": ["Arithmetic", "Data Interpretation", "Probability", "Logical Reasoning"],
      "Coding": ["Arrays", "Strings", "Recursion", "Loops", "Basic Problem-solving"],
      "Logical Reasoning": ["Syllogism", "Blood Relations", "Direction Sense", "Seating Arrangement"],
    },
    roadmap: [
      "Week 1: Aptitude basics & Logical reasoning",
      "Week 2: Coding fundamentals",
      "Week 3: Recursion & small coding challenges",
      "Week 4: Mock tests + Full syllabus revision",
    ],
    resources: {
      "Aptitude": [
        { name: "Deloitte Prep on YouTube", link: "https://www.youtube.com/results?search_query=deloitte+nla+preparation" },
      ],
      "Coding": [
        { name: "TechDose YouTube", link: "https://www.youtube.com/c/TechDose" },
      ],
      "Logical Reasoning": [
        { name: "Hitbullseye Logical Reasoning", link: "https://www.hitbullseye.com" },
      ],
    },
  },

  "wipro-wase": {
    name: "Wipro WASE",
    syllabus: {
      "Aptitude": ["Time & Work", "Profit & Loss", "Probability", "Ratio & Proportion"],
      "Coding": ["Arrays", "Strings", "Recursion", "Sorting", "Graphs"],
    },
    roadmap: [
      "Week 1: Aptitude basics",
      "Week 2: Coding basics - Arrays, Strings",
      "Week 3: Graphs & Sorting algorithms",
      "Week 4: Mock tests + Revision",
    ],
    resources: {
      "Aptitude": [
        { name: "Wipro Placement Prep", link: "https://www.youtube.com/results?search_query=wipro+placement" },
      ],
      "Coding": [
        { name: "GeeksforGeeks Wipro Practice", link: "https://www.geeksforgeeks.org/wipro-placement-papers/" },
      ],
    },
  },

  "accenture-ase": {
    name: "Accenture ASE",
    syllabus: {
      "Aptitude": ["Time & Work", "Profit & Loss", "Percentage", "Ratio & Proportion", "Probability", "Data Interpretation"],
      "Verbal Reasoning": ["Reading Comprehension", "Sentence Completion", "Synonyms & Antonyms"],
      "Coding": ["Arrays", "Strings", "Recursion", "Sorting", "Dynamic Programming"],
    },
    roadmap: [
      "Week 1: Aptitude basics",
      "Week 2: Verbal reasoning practice",
      "Week 3: Coding fundamentals & Sorting",
      "Week 4: Mock tests + DP practice",
    ],
    resources: {
      "Aptitude": [
        { name: "Accenture Prep YouTube", link: "https://www.youtube.com/results?search_query=accenture+ase+placement" },
      ],
      "Verbal Reasoning": [
        { name: "ExamRace Verbal", link: "https://www.youtube.com/c/ExamRace" },
      ],
      "Coding": [
        { name: "Pepcoding", link: "https://www.youtube.com/c/pepcoding" },
        { name: "CodeStudio", link: "https://www.codingninjas.com/codestudio" },
      ],
    },
  },

  "cognizant-coding": {
    name: "Cognizant Coding Test",
    syllabus: {
      "Aptitude": ["Time & Work", "Profit & Loss", "Probability", "Logical Reasoning"],
      "Coding": ["Arrays", "Strings", "Recursion", "Dynamic Programming", "Graphs", "Sorting"],
    },
    roadmap: [
      "Week 1: Aptitude basics & Logical reasoning",
      "Week 2: Coding fundamentals",
      "Week 3: Advanced coding practice",
      "Week 4: Mock tests + Revision",
    ],
    resources: {
      "Aptitude": [
        { name: "Cognizant Prep", link: "https://www.youtube.com/results?search_query=cognizant+placement+preparation" },
      ],
      "Coding": [
        { name: "GeeksforGeeks Practice", link: "https://www.geeksforgeeks.org/cognizant-placement-papers/" },
      ],
    },
  },

  "capgemini-engage": {
    name: "Capgemini Engage Test",
    syllabus: {
      "Aptitude": ["Time & Work", "Profit & Loss", "Percentage", "Data Interpretation"],
      "Coding": ["Arrays", "Strings", "Recursion", "Sorting", "Graphs"],
    },
    roadmap: [
      "Week 1: Aptitude basics",
      "Week 2: Coding fundamentals",
      "Week 3: Sorting & Graph practice",
      "Week 4: Mock tests + Revision",
    ],
    resources: {
      "Aptitude": [
        { name: "Capgemini Prep YouTube", link: "https://www.youtube.com/results?search_query=capgemini+placement+preparation" },
      ],
      "Coding": [
        { name: "GeeksforGeeks Capgemini Practice", link: "https://www.geeksforgeeks.org/capgemini-placement-papers/" },
      ],
    },
  },

  "tech-mahindra": {
    name: "Tech Mahindra Exam",
    syllabus: {
      "Aptitude": ["Time & Work", "Profit & Loss", "Probability", "Ratio & Proportion", "Data Interpretation"],
      "Coding": ["Arrays", "Strings", "Recursion", "Dynamic Programming", "Sorting"],
    },
    roadmap: [
      "Week 1: Aptitude basics",
      "Week 2: Coding fundamentals",
      "Week 3: Advanced coding practice",
      "Week 4: Mock tests + Revision",
    ],
    resources: {
      "Aptitude": [
        { name: "Tech Mahindra Prep", link: "https://www.youtube.com/results?search_query=tech+mahindra+placement" },
      ],
      "Coding": [
        { name: "GeeksforGeeks Tech Mahindra Practice", link: "https://www.geeksforgeeks.org/tech-mahindra-placement-papers/" },
      ],
    },
  },
};

export default function ExamDetail() {
  const { examId } = useParams();
  const exam = examData[examId];

  if (!exam) return <div className="text-center py-20">Exam not found!</div>;

  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-10">{exam.name} - Full Syllabus</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Syllabus */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-indigo-300 transition transform hover:-translate-y-2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Syllabus</h2>
          {Object.keys(exam.syllabus).map((section, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-bold text-indigo-600">{section}</h3>
              <ul className="list-disc list-inside text-gray-700">
                {exam.syllabus[section].map((topic, tidx) => (
                  <li key={tidx}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-indigo-300 transition transform hover:-translate-y-2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Roadmap</h2>
          <ul className="list-disc list-inside text-gray-700">
            {exam.roadmap.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-indigo-300 transition transform hover:-translate-y-2">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Resources</h2>
          {Object.keys(exam.resources).map((section, idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-bold text-indigo-600">{section}</h3>
              <ul className="list-inside text-gray-700">
                {exam.resources[section].map((res, ridx) => (
                  <li key={ridx}>
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
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
    </div>
  );
}