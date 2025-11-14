import OpenAI from "openai";

export default async function handler(req, res) {
  const { prompt } = req.query;
  if (!prompt) return res.status(400).json({ error: "prompt wajib" });

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const image = await client.images.generate({
    model: "gpt-image-1",
    prompt
  });

  res.status(200).json({ url: image.data[0].url });
}
