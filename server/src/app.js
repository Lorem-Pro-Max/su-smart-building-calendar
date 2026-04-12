import express from "express";
import cors from "cors";
import meetingRouter from "./routes/meetingRoute.js";
import roomRouter from "./routes/roomRoute.js";
import airQualityRouter from "./routes/airQualityRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", meetingRouter);
app.use("/api", roomRouter);
app.use("/api", airQualityRouter);

export default app;
