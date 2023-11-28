import express from "express";

const app = express();

const port = 8080;

app.get("/events", (req, res) => {
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
    // const data = {
    //   id: Math.floor(Math.random() * 10000),
    //   lat: (Math.random() * 180 - 90).toFixed(3),
    //   lon: (Math.random() * 360 - 180).toFixed(3),
    //   cog: Math.floor(Math.random() * 360),
    //   range: Math.floor(Math.random() * 1000),
    //   upCount: Math.floor(Math.random() * 1000),
    // };
    // console.log(data)
    ids.forEach((data) => {
      data.cog = Math.floor(Math.random() * 360);
      data.range = Math.floor(Math.random() * 1000);
      data.upCount = Math.floor(Math.random() * 1000);
      data.lat = Math.floor(Math.random() * 180 - 90).toFixed(3);
      data.lon = Math.floor(Math.random() * 360 - 180).toFixed(3);
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    console.log(data)

    });
    
  }, 3000);

  req.on("close", () => {
    clearInterval(id);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
