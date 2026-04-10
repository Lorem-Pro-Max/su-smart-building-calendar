import { Button, message } from "antd";
import { useMemo, useState, useEffect } from "react";
import RoomSelectionModal from "./RoomSelection/RoomSelection";
import { getRooms } from "../services/getRooms";

function getHeaderPrimaryLabel(floor, roomOrFloorChoice, rooms) {
    if (!roomOrFloorChoice) {
        return `ชั้น ${floor}`;
    }
    if (roomOrFloorChoice.type === "floor") {
        return `ชั้น ${roomOrFloorChoice.value}`;
    }
    const room = rooms.find(
        (r) => String(r.id) === String(roomOrFloorChoice.value)
    );
    return room?.title ?? room?.name ?? `ห้อง ${roomOrFloorChoice.value}`;
}

function Header({
    floor,
    setFloor,
    setSelectedRoomId,
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [roomOrFloorChoice, setRoomOrFloorChoice] = useState(null);

    const handleConfirmSelection = (payload) => {
        setRoomOrFloorChoice(payload);
        if (payload.type === "floor") {
            setFloor(Number(payload.value));
            setSelectedRoomId(null);
            return;
        }
        if (payload.type === "room") {
            const room = rooms.find(
                (r) => String(r.id) === String(payload.value)
            );
            if (!room) {
                message.error("ไม่พบข้อมูลห้อง");
                return;
            }
            setFloor(Number(room.floor));
            setSelectedRoomId(Number(room.id));
        }
    };

    const primaryLabel = useMemo(
        () => getHeaderPrimaryLabel(floor, roomOrFloorChoice, rooms),
        [floor, roomOrFloorChoice, rooms]
    );

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const data = await getRooms();
                setRooms(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error(err);
                setRooms([]);
            }
        };
        fetchRooms();
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#FFA39E] to-[#303030] py-5 px-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
                <div>
                    <p className="text-white text-3xl">{primaryLabel}</p>
                    <p className="text-white">Science Teaching & Laboratory Building</p>
                </div>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                    เลือกห้อง
                </Button>
            </div>

            <RoomSelectionModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                rooms={rooms}
                buildingName={"อาคารการเรียนการสอนและปฎิบัติการคณะวิทยาศาสตร์"}
                onConfirmSelection={handleConfirmSelection}
            />
        </div>
    );
}

export default Header;
