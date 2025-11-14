import OpenAI from "openai";

export default async function handler(req, res) {
  const { prompt } = req.query;

  if (!prompt) {
    return res.status(400).json({ error: "prompt wajib diisi" });
  }

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const result = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  });

  res.status(200).json({
    prompt,
    response: result.choices[0].message.content
  });
}
