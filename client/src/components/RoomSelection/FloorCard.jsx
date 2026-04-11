import BuildingIcon from "../../assets/icons/building.svg";
import { Col } from "antd";

export default function FloorCard({
  floorKey,
  roomCount,
  buildingName,
  selection,
  onSelect,
}) {
  const floorNum = Number(floorKey);
  const isSelected =
    selection?.type === "floor" && Number(selection.value) === floorNum;

  return (
    <Col xs={24}>
      <div
        className={`p-4 rounded-2xl bg-white shadow-lg cursor-pointer hover:ring-1 hover:ring-teal-400 font-kanit ${isSelected ? "ring-2 ring-teal-400 ring-offset-1" : ""
          }`}
        onClick={onSelect}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onSelect();
        }}
      >
        <div className="flex gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white shrink-0"
            style={{ backgroundColor: "#1677FF" }}
          >
            <img src={BuildingIcon} className="w-4" alt="" />
          </div>
          <div className="min-w-0">
            <div className="text-sm leading-tight truncate">
              ชั้น {floorKey}
            </div>
            <div className="text-[14px] text-gray-500">
              ทุกห้องในชั้น {floorKey}
            </div>
            <div className="text-[12px] text-gray-400 mt-1 line-clamp-2">
              {buildingName}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}
