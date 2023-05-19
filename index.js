import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 4000;

// Connection: mongoose to mongodb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connection: body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`\nExpress Server running on Port ${PORT}...`);
});

app.listen(PORT, () =>
  console.log(`\nExpress Server running on Port ${PORT}...`)
);
