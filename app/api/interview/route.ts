export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const data = {
    hr: [
      "Tell me about yourself",
      "Why should we hire you?",
      "What are your strengths?"
    ],

    technical: [
      "What is DBMS?",
      "Explain Operating System",
      "What is normalization?"
    ],

    dsa: [
      "What is stack?",
      "Explain recursion",
      "Difference between queue and stack"
    ]
  };

  return Response.json(data[type as keyof typeof data] || []);
}