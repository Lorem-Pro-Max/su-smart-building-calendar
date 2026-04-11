import express from "express";
import { getAirQualityRoomData } from "../controllers/airQualityController.js";

const router = express.Router();

router.get("/sensor/room/:id", getAirQualityRoomData);

export default router;
