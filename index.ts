import express from "express";
import cors from "cors";

const app = express();

const port = 8080;

app.use(cors());

app.get("/stream", (req, res) => {
  const clientIP = req.ip;
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();
  const ids = [
    {
      id: 3355,
      lat: (Math.random() * 180 - 90).toFixed(3),
      lon: (Math.random() * 360 - 180).toFixed(3),
      cog: Math.floor(Math.random() * 360),
      range: Math.floor(Math.random() * 1000),
      upCount: Math.floor(Math.random() * 1000),
    },
    {
      id: 7575,
      lat: (Math.random() * 180 - 90).toFixed(3),
      lon: (Math.random() * 360 - 180).toFixed(3),
      cog: Math.floor(Math.random() * 360),
      range: Math.floor(Math.random() * 1000),
      upCount: Math.floor(Math.random() * 1000),
    },
  ];
  let id = setInterval(() => {
    ids.forEach((data) => {
      data.cog = Math.floor(Math.random() * 360);
      data.range = Math.floor(Math.random() * 1000);
      data.upCount = Math.floor(Math.random() * 1000);
      data.lat = Math.floor(Math.random() * 180 - 90).toFixed(3);
      data.lon = Math.floor(Math.random() * 360 - 180).toFixed(3);
      console.log({ ...data, clientIP });
      res.write(`data: ${JSON.stringify({ ...data, clientIP })}\n\n`);
    });
  }, 3000);

  req.on("close", () => {
    clearInterval(id);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
