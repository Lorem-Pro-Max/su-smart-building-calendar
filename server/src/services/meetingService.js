import sql from "../../db.js";

export const fetchUpcomingByDateAndFloor = async (date, floor) => {
  const rows = await sql`
    SELECT 
      rb.id,
      rb.meeting_name,
      rb."start_dateTime",
      rb."end_dateTime",
      rb.room_id,
      r.title AS room_title,
      r.floor
    FROM room_booking rb
    JOIN room r ON rb.room_id = r.id
    WHERE rb.booking_date = ${date}
      AND r.floor = ${floor}
      AND rb."start_dateTime" > NOW()
      AND rb.status_id = 2 OR rb.status_id = 2 
    ORDER BY rb."start_dateTime" ASC
  `;

  return rows;
};
