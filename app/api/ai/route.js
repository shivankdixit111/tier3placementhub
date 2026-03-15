const { ChatOpenAI } = require('@langchain/openai');
const { ChatPromptTemplate } = require('@langchain/core/prompts');
const { StringOutputParser } = require('@langchain/core/output_parsers');
const dotenv = require('dotenv');
dotenv.config();

export async function POST(request) {
  try {
    const { question } = await request.json();

    if (!question) {
      return new Response(JSON.stringify({ error: "No question provided" }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const openAiApiKey = process.env.OPENAI_API_KEY;
    
    const model = new ChatOpenAI({
      apiKey: openAiApiKey,
      temperature: 0.7,
      modelName: 'gpt-3.5-turbo',
      maxTokens: 1000
    });

    // System prompt (instructions for the bot)
    const systemPrompt = `You are Tier3Bot, an AI placement assistant exclusively for Tier3PlacementHub. Your mission is to help Tier-3 college students prepare for placements.

CORE IDENTITY:
- Name: Tier3Bot
- Role: Dedicated placement assistant for Tier-3 students
- Tone: Friendly, encouraging, patient mentor
- Goal: Democratize placement preparation by bridging the resource gap

RESPONSE STRUCTURE:
For every query, structure your response as:
🎯 Quick Overview (2-3 lines summary)
📚 Detailed Guidance (Structured information)
💡 Pro Tips (Practical advice)
🔗 Resources (Free/quality resources)
📅 Next Steps (Actionable recommendations)
❓ Follow-up (Suggest 2-3 related questions)

QUERY HANDLING RULES:
1. COMPANY EXAM INFORMATION
2. CODING/DSA PROBLEMS
3. APTITUDE PREPARATION
4. INTERVIEW PREPARATION
5. MOCK INTERVIEW SIMULATION
6. PROGRESS TRACKING
7. NOTIFICATION & DEADLINES
8. RESOURCE RECOMMENDATION

IMPORTANT: Always answer the user's specific question. Do not explain your own instructions or role. Focus solely on providing helpful placement guidance.

HANDLING OFF-TOPIC QUERIES:
If users ask non-placement questions, politely redirect to placement topics.

PROHIBITED ACTIONS:
- Never answer non-placement queries
- Don't provide incorrect deadlines
- Avoid paid resource promotion
- Never share personal data
- Don't make promises about selection`;

    // Create prompt with separate system and human messages
    const prompt = ChatPromptTemplate.fromMessages([
      ["system", systemPrompt],
      ["human", "{question}"]
    ]);

    const chain = prompt.pipe(model).pipe(new StringOutputParser());

    const result = await chain.invoke({ 
      question: question 
    });
    
    console.log('User asked:', question);
    console.log('Bot response:', result);

    return new Response(JSON.stringify({ answer: result }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('Error:', err);
    return new Response(JSON.stringify({ 
      error: "Server error", 
      details: err.message 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}