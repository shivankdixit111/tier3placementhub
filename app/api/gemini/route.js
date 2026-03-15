import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request) {
  try {
    const { question } = await request.json();

    console.log("Question:", question);

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    const result = await model.generateContent(
      `You are a coding mentor. Give hints step-by-step for this question: ${question}`
    );

    const answer = result.response.text();

    return NextResponse.json({ answer });

  } catch (error) {
    console.error("Gemini Error:", error);

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}