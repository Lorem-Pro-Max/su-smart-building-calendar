/** Mock sensor readings — replace with API later */
export const MOCK_ENVIRONMENT = {
  temp: {
    label: "Temp",
    value: "24.06",
    unit: "°C",
    valueClassName: "text-gray-900",
  },
  pm10: {
    label: "PM 10",
    value: "46",
    unit: "ug/m³",
    valueClassName: "text-yellow-500",
  },
  pm25: {
    label: "PM 2.5",
    value: "40",
    unit: "ug/m³",
    valueClassName: "text-green-600",
  },
  co2: {
    label: "CO2",
    value: "406",
    unit: "ppm",
    valueClassName: "text-purple-600",
  },
  co: {
    label: "CO",
    value: "40",
    unit: "ppm",
    valueClassName: "text-orange-500",
  },
};
