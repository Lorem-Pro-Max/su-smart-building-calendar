import { ConfigProvider, Modal, message } from "antd";
import { useEffect, useState } from "react";
import RoomsByFloorTabs from "./RoomByFloorTabs";
import useRoomByFloor from "./useRoomByFloor";

export default function RoomSelectionModal({
  isModalOpen,
  setIsModalOpen,
  rooms,
  buildingName,
  onConfirmSelection,
}) {
  const [selection, setSelection] = useState(null);

  const roomsGroupedByFloor = useRoomByFloor(rooms);

  useEffect(() => {
    if (isModalOpen) setSelection(null);
  }, [isModalOpen]);

  const handleConfirm = () => {
    if (!selection) {
      message.warning("กรุณาเลือกชั้นหรือห้อง");
      return;
    }
    onConfirmSelection?.(selection);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setSelection(null);
    setIsModalOpen(false);
  };

  return (
    <ConfigProvider theme={{ token: { fontFamily: "'Kanit', sans-serif" } }}>
    <Modal
      title={
        <span className="text-xl font-bold font-kanit">
          เลือกห้องเรียน/ห้องประชุม
        </span>
      }
      open={isModalOpen}
      centered
      width={1143}
      footer={null}
      onCancel={handleCancel}
      classNames={{ content: "font-kanit" }}
    >
      <RoomsByFloorTabs
        roomsGroupedByFloor={roomsGroupedByFloor}
        selection={selection}
        onSelectionChange={setSelection}
        buildingName={buildingName}
      />
      <div className="w-full flex flex-col sm:flex-row gap-2 pt-5">
        <button
          type="button"
          className="w-full sm:w-1/2 rounded-lg h-10 border border-gray-300 text-gray-700 hover:bg-gray-100 transition cursor-pointer font-kanit"
          onClick={handleCancel}
        >
          ยกเลิก
        </button>
        <button type="button" className="w-full sm:w-1/2 rounded-lg h-10 bg-teal-400 text-white hover:bg-teal-600 transition cursor-pointer font-kanit" onClick={handleConfirm}>
          ยืนยัน
        </button>
      </div>
    </Modal>
    </ConfigProvider>
  );
}
