import express from "express";
import { getUpcomingBookings } from "../controllers/meetingController.js";

const router = express.Router();

router.get("/upcoming", getUpcomingBookings);

export default router;
