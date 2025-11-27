import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// In a real scenario, ensure process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const MODEL_NAME = 'gemini-2.5-flash';

/**
 * Generic helper to send a prompt to Gemini
 */
async function generateText(prompt: string): Promise<string> {
  try {
    if (!process.env.API_KEY) {
      // Fallback for demo purposes if no key is present in environment
      // In production, this should throw an error or handle gracefully
      console.warn("No API Key found in environment variables.");
      return "Error: API Key is missing. Please configure your environment variables.";
    }

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });
    
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `Error generating content: ${error instanceof Error ? error.message : String(error)}`;
  }
}

export const toolService = {
  /**
   * Message to Task: Convert message into tasks.
   */
  async messageToTask(input: string): Promise<string> {
    const prompt = `
      You are a helpful project manager assistant.
      Analyze the following message and extract actionable tasks.
      
      Input Message:
      "${input}"
      
      Output Format:
      - [ ] Task 1
      - [ ] Task 2
      ...
      
      (Provide a brief context or category if applicable)
    `;
    return generateText(prompt);
  },

  /**
   * Mail to Task: Translate/Explain + Draft Reply
   */
  async mailToTask(input: string): Promise<string> {
    const prompt = `
      You are an executive assistant.
      Analyze the following email content.
      
      Email Content:
      "${input}"
      
      Please provide:
      1. A brief summary/explanation of what the email is about.
      2. A list of actionable tasks derived from the email.
      3. A draft of a polite and professional reply.
      
      Format the output clearly using Markdown headers.
    `;
    return generateText(prompt);
  },

  /**
   * Today Work Recap: Summarize tasks into a paragraph
   */
  async todayWorkRecap(input: string): Promise<string> {
    const prompt = `
      You are a professional copywriter.
      Convert the following list of completed tasks into a coherent, professional daily work recap paragraph suitable for a daily stand-up or end-of-day report.
      
      Completed Tasks:
      "${input}"
    `;
    return generateText(prompt);
  },

  /**
   * MakeSQLgood: Beautify SQL
   */
  async makeSqlGood(input: string): Promise<string> {
    const prompt = `
      You are a database expert.
      Take the following SQL query or database log entry and format it into standard, readable, and beautiful SQL.
      If it is a log entry, extract the SQL part and format it.
      
      Input:
      "${input}"
      
      Output:
      \`\`\`sql
      -- Formatted SQL
      ...
      \`\`\`
    `;
    return generateText(prompt);
  }
};