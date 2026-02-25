import { ClockCircleOutlined } from "@ant-design/icons"

function MeetingCard() {
    return <>
        <div className="bg-white rounded-xl p-5 flex flex-col gap-2">
            <div className="flex gap-2">
                <ClockCircleOutlined />
                <p className="text-[#13C2C2]">09:00-12:00 น.</p>
                <p className="font-bold">พลังงานและสสาร</p>
            </div>
            <p>จันจิรา บุญผ่อง</p>
        </div>
        <div className="bg-white h-[1px]"></div></>
}

export default MeetingCard