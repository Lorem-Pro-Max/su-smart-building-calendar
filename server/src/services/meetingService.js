import sql from "../../db.js";

export const fetchUpcomingByDateAndFloor = async (date, floor) => {
  const rows = await sql`
    SELECT 
      rb.id,
      rb.meeting_name,
      rb."start_dateTime",
      rb."end_dateTime",
      rb.booking_date,
      rb.room_id,
      r.title AS room_title,
      r.floor,
      u.firstname AS firstname,
      u.lastname AS lastname,
      u.username AS username
    FROM room_booking rb
    JOIN room r ON rb.room_id = r.id
    LEFT JOIN "user" u ON rb.requester_id = u.id
    WHERE rb."start_dateTime" >= ${date}
      AND r.floor = ${floor}
      AND rb.status_id IN (2, 5)
    ORDER BY rb."start_dateTime" ASC
  `;

  return rows;
};
