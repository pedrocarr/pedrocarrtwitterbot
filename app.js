import express from "express";
const app = express();
const port = 4000;
import twitterPost from './index.js';



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
twitterPost()


