import MockInterview from "../component/VideoCall";
import Link from "next/link";

export default function StartInterview() {
  return (
    <div>

      <div className="p-6 flex justify-between items-center bg-indigo-600 text-white">
        <h2 className="text-xl font-semibold">
          AI Interview Session
        </h2>

        <Link href="/mock">
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg">
            Back
          </button>
        </Link>
      </div>

      <MockInterview />

    </div>
  );
}