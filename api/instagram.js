export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) return res.status(400).json({ error: "url wajib" });

  const api = `https://saveinsta.io/api?url=${url}`;

  const result = await fetch(api).then(r => r.json());

  res.status(200).json(result);
}
