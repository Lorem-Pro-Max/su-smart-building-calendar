import * as meetingService from "../services/meetingService.js";

export const getUpcomingBookings = async (req, res) => {
  try {
    const { date, floor } = req.query;

    console.log(date, floor);

    if (!date || !floor) {
      return res.status(400).json({
        error: "date and floor are required",
      });
    }

    const data = await meetingService.fetchUpcomingByDateAndFloor(date, floor);

    res.json({ data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
