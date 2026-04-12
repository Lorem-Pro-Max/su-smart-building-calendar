import sql from "../../db.js";

export const fetchBookableRooms = async () => {
  const rows = await sql`
    SELECT
      id,
      title,
      floor,
      created_at,
      building_id
    FROM room
    WHERE is_bookable = true
    ORDER BY floor NULLS LAST, title
  `;

  return rows;
};
