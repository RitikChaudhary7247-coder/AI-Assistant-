import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔑 Put your API key here (or load from env)
const apiKey = "AIzaSyByAfrqurRGeyRx9qgCEJokBnUtjKwSu1I";

// Create client
const genAI = new GoogleGenerativeAI(apiKey);

// Simple test function
async function checkApiKey() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent("Say: API key is working");
    const text = result.response.text();

    console.log("✅ API key is working!");
    console.log("Response:", text);
  } catch (err) {
    console.error("❌ API key error:", err.message || err);
  }
}

// Run immediately
checkApiKey();
