import express from "express";
import retweet from "./index.js";
const app = express();
const port = 3000;



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

retweet();
setInterval(() => {
  retweet();
}, 600000);

