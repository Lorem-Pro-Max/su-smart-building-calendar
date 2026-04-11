import {
  CloudOutlined,
  DashboardOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import EnvironmentMetricCard from "./EnvironmentMetricCard";
import { MOCK_ENVIRONMENT } from "./mockEnvironment";

const iconFor = (key) => {
  const map = {
    temp: <DashboardOutlined />,
    pm10: <FilterOutlined />,
    pm25: <FilterOutlined />,
    co2: <CloudOutlined />,
    co: <CloudOutlined />,
  };
  return map[key] ?? null;
};

export default function EnvironmentPanel() {
  const m = MOCK_ENVIRONMENT;

  return (
    <div className="flex flex-col gap-3 h-full min-h-0 min-w-0 md:max-w-md lg:max-w-lg w-full">
      <EnvironmentMetricCard
        icon={iconFor("temp")}
        label={m.temp.label}
        value={m.temp.value}
        unit={m.temp.unit}
        valueClassName={m.temp.valueClassName}
      />
      <div className="grid grid-cols-2 gap-3">
        <EnvironmentMetricCard
          icon={iconFor("pm10")}
          label={m.pm10.label}
          value={m.pm10.value}
          unit={m.pm10.unit}
          valueClassName={m.pm10.valueClassName}
        />
        <EnvironmentMetricCard
          icon={iconFor("pm25")}
          label={m.pm25.label}
          value={m.pm25.value}
          unit={m.pm25.unit}
          valueClassName={m.pm25.valueClassName}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <EnvironmentMetricCard
          icon={iconFor("co2")}
          label={m.co2.label}
          value={m.co2.value}
          unit={m.co2.unit}
          valueClassName={m.co2.valueClassName}
        />
        <EnvironmentMetricCard
          icon={iconFor("co")}
          label={m.co.label}
          value={m.co.value}
          unit={m.co.unit}
          valueClassName={m.co.valueClassName}
        />
      </div>
    </div>
  );
}
