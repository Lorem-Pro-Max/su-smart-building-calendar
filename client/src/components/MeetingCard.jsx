import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons"

function MeetingCard({ meeting }) {
    const startTime = new Date(meeting.start_dateTime).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
    const endTime = new Date(meeting.end_dateTime).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });

    return <>
        <div className="bg-white rounded-xl p-5 flex flex-col gap-2">
            <p className="text-xl font-semibold">{meeting.room_title}</p>
            <div className="flex gap-2">
                <ClockCircleOutlined />
                <p className="text-[#13C2C2]">{startTime} - {endTime} น.</p>
                <p className="font-semibold">{meeting.meeting_name}</p>
            </div>
            <div className="flex gap-1">
                <UserOutlined />
                <p>จันจิรา บุญผ่อง</p>
            </div>

        </div>
        <div className="bg-white h-[1px]"></div></>
}

export default MeetingCard