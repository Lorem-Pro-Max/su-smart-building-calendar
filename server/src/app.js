import express from "express";
import cors from "cors";
import meetingRouter from "./routes/meetingRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", meetingRouter);

export default app;
