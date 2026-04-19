import { fetchAllSensorData } from "../services/iotService.js";
import { fetchDevicesByRoomId } from "../services/deviceService.js";

const MT_PREFIX = "MT";
const TES_PREFIX = "TES";

export const getAirQualityRoomData = async (req, res) => {
  const roomId = req.params.id;

  try {
    if (!roomId) {
      return res
        .status(400)
        .json({ success: false, message: "Room ID is required." });
    }

    const deviceIds = await fetchDevicesByRoomId(roomId);

    if (!deviceIds.length) {
      return res.status(404).json({
        success: false,
        message: `No sensor devices found for room ${roomId}.`,
      });
    }

    const mtDeviceId = deviceIds.find((id) => id.startsWith(MT_PREFIX));
    const tesDeviceId = deviceIds.find((id) => id.startsWith(TES_PREFIX));

    const allSensorData = await fetchAllSensorData();

    if (!allSensorData || Object.keys(allSensorData).length === 0) {
      return res.status(503).json({
        success: false,
        message: "The sensor system is currently offline.",
      });
    }

    const mtData = mtDeviceId ? allSensorData[mtDeviceId] : null;
    const tesData = tesDeviceId ? allSensorData[tesDeviceId] : null;

    if (!mtData && !tesData) {
      return res.status(404).json({
        success: false,
        message: `No sensor readings found for room ${roomId}.`,
      });
    }

    const rawTemp = tesData?.temp ?? mtData?.temp;
    const temp =
      rawTemp !== undefined && rawTemp !== null
        ? parseFloat(rawTemp).toFixed(2)
        : null;

    const data = {
      temp,
      pm25: mtData?.pm25 ?? null,
      pm10: mtData?.pm10 ?? null,
      co2: mtData?.co2 ?? null,
      co: mtData?.co ?? null,
    };

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(`[getAirQualityRoomData] room=${roomId}`, error);
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve air quality data.",
    });
  }
};
