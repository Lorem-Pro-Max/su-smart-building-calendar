import express from "express";
import { getBookableRooms } from "../controllers/roomController.js";

const router = express.Router();

router.get("/rooms", getBookableRooms);

export default router;
