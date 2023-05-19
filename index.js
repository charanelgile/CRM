import express from "express";

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`\nExpress Server running on Port ${PORT}...`);
});

app.listen(PORT, () =>
  console.log(`\nExpress Server running on Port ${PORT}...`)
);
