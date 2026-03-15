export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Student Dashboard</h1>
      <div className="mt-6 space-y-4">
        <div>
          <p className="font-semibold">Coding Progress</p>
          <div className="bg-gray-200 w-full h-4 rounded">
            <div className="bg-green-500 h-4 w-4/5 rounded"></div>
          </div>
        </div>
        <div>
          <p className="font-semibold">Aptitude Progress</p>
          <div className="bg-gray-200 w-full h-4 rounded">
            <div className="bg-green-500 h-4 w-3/5 rounded"></div>
          </div>
        </div>
        <p>Mock Interviews Completed: 5</p>
        <p>Upcoming Exam: TCS NQT</p>
      </div>
    </div>
  );
}