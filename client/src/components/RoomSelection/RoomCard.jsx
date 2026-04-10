import BuildingIcon from "../../assets/icons/building.svg";
import { Col } from "antd";

function RoomCard({
    roomItem,
    floorKey,
    selection,
    onSelectRoom,
    buildingName,
}) {
    const roomId = roomItem.id ?? `${roomItem.floor}-${roomItem.title ?? roomItem.name}`;
    const roomName = roomItem.title ?? roomItem.name ?? "-";

    const isSelected =
        selection?.type === "room" &&
        String(selection.value) === String(roomItem.id);

    return (
        <Col key={roomId} xs={24} sm={12} md={12} lg={8}>
            <div
                className={`p-4 rounded-2xl bg-white shadow-lg hover:ring-1 hover:ring-teal-400 cursor-pointer ${isSelected ? "ring-2 ring-teal-400 ring-offset-1" : ""}`}
                onClick={() => onSelectRoom({ type: "room", value: Number(roomItem.id) })}
            >
                <div className="flex gap-3">
                    <div className="w-10 h-10 bg-teal-400 rounded-lg flex items-center justify-center text-white shrink-0">
                        <img src={BuildingIcon} className="w-4" alt="" />
                    </div>
                    <div className="min-w-0">
                        <div className="font-bold text-sm leading-tight truncate">
                            {roomName}
                        </div>
                        <div className="text-[14px] text-gray-500">ชั้น {floorKey}</div>
                        <div className="text-[12px] text-gray-400 mt-1 line-clamp-2">
                            {buildingName}
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default RoomCard;
