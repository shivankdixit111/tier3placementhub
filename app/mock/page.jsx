import Link from "next/link";

export default function MockHome() {

  const interviews = [
    { name: "HR Interview", type: "hr" },
    { name: "Technical Interview", type: "technical" },
    { name: "DSA Interview", type: "dsa" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white">

      <h1 className="text-5xl font-bold mb-8">
        AI Mock Interview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {interviews.map((i) => (
          <Link key={i.type} href={`/mock/${i.type}`}>

            <div className="bg-white text-indigo-700 p-8 rounded-xl shadow-xl cursor-pointer hover:scale-105 transition">

              <h2 className="text-2xl font-bold">{i.name}</h2>
              <p className="mt-2 text-gray-600">
                Practice AI powered interview
              </p>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}