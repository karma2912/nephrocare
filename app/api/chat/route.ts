import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "API Key missing" }, { status: 500 });
    }

    // UPDATED: Using 'gemini-2.5-flash' which exists in your model list
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const payload = {
      contents: [
        {
          parts: [
            {
              text: `You are a specialized renal diet assistant for NephroCare. 
                     You help CKD patients. Keep answers short, safe, and medical.
                     User Question: ${body.message}`
            }
          ]
        }
      ]
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Google API Error:", data);
      return NextResponse.json(
        { error: data.error?.message || "Google API Error" }, 
        { status: response.status }
      );
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
      return NextResponse.json({ error: "No response text found" }, { status: 500 });
    }

    return NextResponse.json({ text });

  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json({ 
      error: "Internal Server Error", 
      details: error.message 
    }, { status: 500 });
  }
}