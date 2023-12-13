import express from "express";
import cors from "cors";
import { setEventStreamId } from "./utility/setEventStreamIdMiddleware";
import { TargetRepository } from "./src/modules/targets/target.repository";
import { TargetService } from "./src/modules/targets/target.service";
import { makeTargetRoute } from "./src/routes/target.route";
const app = express();

const port = 8080;

app.use(cors());

const targetRepo = new TargetRepository();
const targetService = new TargetService(targetRepo);
app.use(makeTargetRoute(targetService));
app.get("/stream", setEventStreamId, (req, res) => {
  const clientIP = req.ip;
  let id = setInterval(async() => {
   const ids = await targetService.gettargets() 
    ids.forEach((data) => {
      data.cog = Math.floor(Math.random() * 360);
      data.range = Math.floor(Math.random() * 1000);
      data.upCount = Math.floor(Math.random() * 1000);
      data.lat = Math.floor(Math.random() * 180 - 90).toFixed(3);
      data.lon = Math.floor(Math.random() * 360 - 180).toFixed(3);
      // console.log({ ...data, clientIP });
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
