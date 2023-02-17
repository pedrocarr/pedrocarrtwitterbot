import express from "express";
import retweet from "./index.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<div style='color:blue;text-align:center;height:5000px;'> \
  <span> \
  <p> \
  Javascript \
  </p> \
  </div>"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

retweet();
setInterval(() => {
  retweet();
}, 600000);

