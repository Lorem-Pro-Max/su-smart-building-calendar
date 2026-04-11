export default function EnvironmentMetricCard({
  icon,
  label,
  value,
  unit,
  valueClassName = "",
  className = "",
}) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-[#F9FAFB] p-4 flex flex-col gap-2 min-h-[100px] ${className}`}
    >
      <div className="flex items-center gap-2 text-gray-600 text-sm">
        {icon ? <span className="text-lg flex items-center">{icon}</span> : null}
        <span>{label}</span>
      </div>
      <div className="mt-auto">
        <span className={`text-2xl font-bold tabular-nums ${valueClassName}`}>
          {value}
        </span>
        {unit ? (
          <span className="text-gray-500 text-sm ml-1">{unit}</span>
        ) : null}
      </div>
    </div>
  );
}
