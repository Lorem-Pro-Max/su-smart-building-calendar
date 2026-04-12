import { api } from "./api";

export const getAirQualityByRoom = async (roomId) => {
  const response = await api.get(`/api/sensor/room/${roomId}`);
  return response.data.data;
};
