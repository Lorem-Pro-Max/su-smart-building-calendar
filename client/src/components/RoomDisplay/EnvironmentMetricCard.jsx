export default function EnvironmentMetricCard({
  icon,
  label,
  value,
  unit,
  valueClassName = "",
  valueStyle,
  large = false,
  className = "",
}) {
  const pad = large ? "p-6" : "p-5";
  return (
    <div
      className={`flex flex-col h-full min-h-0 ${pad} gap-2 ${className}`}
      style={{ background: "linear-gradient(to bottom, #FFFFFF, #F8F8F8)" }}
    >
      <div className="flex flex-col flex-1 min-h-0 justify-center gap-2">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          {icon ? <span className="flex items-center">{icon}</span> : null}
          <span>{label}</span>
        </div>
        <div>
          <span
            className={`tabular-nums ${large ? "text-5xl" : "text-4xl"} ${valueClassName}`}
            style={valueStyle}
          >
            {value}
          </span>
          {unit ? (
            <span className="text-gray-400 text-base ml-1">{unit}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
