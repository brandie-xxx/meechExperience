
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWaveLore = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a high-energy Web3/NFT storyteller for a brand called 'wavvvy'. 
      Generate a short, edgy, and futuristic 'manifesto' or 'lore snippet' (max 100 words) based on the following user vibe: "${prompt}". 
      Use cryptographic metaphors, surfing/ocean slang, and futuristic tech terms.`,
      config: {
        temperature: 0.9,
        maxOutputTokens: 250,
      }
    });
    return response.text || "The waves are silent... for now. Try another vibe.";
  } catch (error) {
    console.error("Gemini Lore Error:", error);
    return "The decentralized grid is currently offline. Please reconnect later.";
  }
};
