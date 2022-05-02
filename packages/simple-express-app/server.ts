import express from 'express';
//@ts-ignore
import cors from 'cors'
const app = express();
const port = 3001;

app.options(cors()) // include before other routes

app.get("/data", (req, res) => {
  res.header({
    'Access-Control-Allow-Origin': '*',
  });
  res.status(200).json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});