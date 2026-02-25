import { api } from "./api";

export const getUpcomingBookings = async (date, floor) => {
  const response = await api.get("/api/upcoming", {
    params: { date, floor },
  });

  return response.data.data;
};
