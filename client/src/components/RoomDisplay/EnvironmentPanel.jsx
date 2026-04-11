import { useEffect, useState, useCallback } from "react";
import EnvironmentMetricCard from "./EnvironmentMetricCard";
import { getAirQualityByRoom } from "../../services/getAirQuality";
import { getAirQualityColor } from "../utils/airQualityColor";
import tempIcon from "../../assets/icons/temp.svg";
import dustIcon from "../../assets/icons/dust.svg";
import airIcon from "../../assets/icons/air.svg";

const POLL_INTERVAL_MS = 30_000;

const icon = (src, alt) => <img src={src} alt={alt} className="w-5 h-5" />;

const METRICS = [
  { key: "temp", label: "Temp", unit: "°C", icon: icon(tempIcon, "temp") },
  { key: "pm10", label: "PM 10", unit: "μg/m³", icon: icon(dustIcon, "pm10") },
  { key: "pm25", label: "PM 2.5", unit: "μg/m³", icon: icon(dustIcon, "pm25") },
  { key: "co2", label: "CO₂", unit: "ppm", icon: icon(airIcon, "co2") },
  { key: "co", label: "CO", unit: "ppm", icon: icon(airIcon, "co") },
];

function formatValue(key, raw) {
  if (raw === null || raw === undefined) return "--";
  if (key === "temp") return parseFloat(raw).toFixed(2);
  return String(raw);
}

export default function EnvironmentPanel({ roomId }) {
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    if (!roomId) return;
    try {
      const result = await getAirQualityByRoom(roomId);
      setData(result);
    } catch {
      setData(null);
    }
  }, [roomId]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [fetchData]);

  const getValue = (key) => formatValue(key, data?.[key]);
  const getColor = (key) => ({ color: getAirQualityColor(key, data?.[key]) });

  const temp = METRICS[0];

  return (
    <div className="flex flex-col h-full min-h-0 min-w-0 md:max-w-md lg:max-w-lg w-full">
      <EnvironmentMetricCard
        icon={temp.icon}
        label={temp.label}
        value={getValue(temp.key)}
        unit={temp.unit}
        valueStyle={getColor(temp.key)}
        large
      />
      <div className="grid grid-cols-2">
        {METRICS.slice(1, 3).map((m) => (
          <EnvironmentMetricCard
            key={m.key}
            icon={m.icon}
            label={m.label}
            value={getValue(m.key)}
            unit={m.unit}
            valueStyle={getColor(m.key)}
          />
        ))}
      </div>
      <div className="grid grid-cols-2">
        {METRICS.slice(3, 5).map((m) => (
          <EnvironmentMetricCard
            key={m.key}
            icon={m.icon}
            label={m.label}
            value={getValue(m.key)}
            unit={m.unit}
            valueStyle={getColor(m.key)}
          />
        ))}
      </div>
    </div>
  );
}
