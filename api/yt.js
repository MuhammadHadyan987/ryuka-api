export default async function handler(req, res) {
  const { url, type } = req.query;

  if (!url) return res.status(400).json({ error: "url wajib diisi" });

  let api = "";

  if (type === "mp3") {
    api = "https://fastrestapis.fasturl.cloud/downup/ytmp3?url=" + url;
  } else {
    api = "https://fastrestapis.fasturl.cloud/downup/ytmp4?url=" + url;
  }

  const result = await fetch(api).then(r => r.json());

  res.status(200).json(result);
}
