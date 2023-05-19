import express from "express";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 4000;

routes(app);

app.get("/", (req, res) => {
  res.send(`\nExpress Server running on Port ${PORT}...`);
});

app.listen(PORT, () =>
  console.log(`\nExpress Server running on Port ${PORT}...`)
);
