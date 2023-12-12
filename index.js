import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./Database/dbConfig.js";
import router from "./Routers/Sudent-MentorRouter.js";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api",router)
connectDb();


app.listen(port, () => {
  console.log("my app running in", port);
});
