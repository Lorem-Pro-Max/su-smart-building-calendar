import axios from "axios";

const IOT_BASE_URL = process.env.IOT_SERVER_URL;

const apiClient = axios.create({
  baseURL: `${IOT_BASE_URL}/control`,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

export const fetchAllSensorData = async () => {
  const response = await apiClient.get("/sensor/all");
  return response.data || {};
};
