import sql from "../../db.js";

export const fetchDevicesByRoomId = async (roomId) => {
  const rows = await sql`
    SELECT device_id
    FROM room_device
    WHERE room_id = ${roomId}
  `;
  return rows.map((r) => r.device_id);
};
