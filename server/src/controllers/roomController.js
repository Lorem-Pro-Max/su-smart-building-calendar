import * as roomService from "../services/roomService.js";

export const getBookableRooms = async (req, res) => {
  try {
    const data = await roomService.fetchBookableRooms();
    res.json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
