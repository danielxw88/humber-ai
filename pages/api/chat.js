import axios from "axios";
import { humberFacts } from '../../data/humberData.js';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { message } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              `You are an assistant who only answers questions about the Humber College Computer Programming diploma.
              Use the following facts to help answer questions, but DO NOT copy them word-for-word.
Instead, explain them clearly and naturally in your own words.
:

- TUITION: ${humberFacts.tuition}
- ADMISSION: ${humberFacts.admission}
- APPLICATION: ${humberFacts.application}
- EQUIPMENT: ${humberFacts.equipment}
- CONTACT: ${humberFacts.contact}
- COURSES: ${humberFacts.courses}
- PROGRAM: ${humberFacts.program}",

Be concise, friendly, and professional.
    `
          },
          {
            role: "user",
            content: message,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        timeout: 10000, // set timeout to 10 seconds
      }
    );

    const reply = response.data.choices?.[0]?.message?.content;

    if (!reply) {
      return res.status(500).json({ reply: "⚠️ No response from AI." });
    }

    res.status(200).json({ reply });
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);

    const errorMessage =
      error?.response?.data?.error?.message || "Something went wrong";
    res.status(500).json({ reply: `⚠️ OpenAI error: ${errorMessage}` });
  }
}
