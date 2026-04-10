import { api } from "./api";

export const getRooms = async () => {
  const response = await api.get("/api/rooms");

  return response.data.data;
};
