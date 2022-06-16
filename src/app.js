import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => {
  console.log("Connected to mongoDB");
});

const app = express();
app.use(express.json());
routes(app);

export default app;
