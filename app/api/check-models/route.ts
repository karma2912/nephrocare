import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) return NextResponse.json({ error: "No API Key" });

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    // This fetches the list of models your key can actually touch
    const modelResponse = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
    // Wait, let's use the actual list method (which is simpler in raw fetch if sdk is acting up, 
    // but let's try a direct fetch to Google to bypass SDK issues).
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}