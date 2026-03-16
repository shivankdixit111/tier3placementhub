import InterviewUI from "../component/InterviewUI";

export default async function InterviewPage({ params }) {
  const {type} = await params;

  return (
    <div>

      <InterviewUI type={type} />

    </div>
  );
}