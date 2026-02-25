import MeetingCard from "./MeetingCard"
import noBooking from "../assets/img/noBooking.png"

function MeetingContainer({ meetings, currentFloor }) {

    const filteredMeetings = meetings.filter(m => m.floor === Number(currentFloor));
    const sortedMeetings = filteredMeetings.sort((a, b) => {
        // แปลง string เป็นตัวเลข timestamp เพื่อเปรียบเทียบ
        const timeA = new Date(a.start_dateTime).getTime();
        const timeB = new Date(b.start_dateTime).getTime();

        return timeA - timeB; // น้อยไปมาก (เช้า -> เย็น)
    });
    return (
        <>
            <div className="p-10 flex flex-col gap-3 flex-1 overflow-y-auto min-h-0">
                <p className="text-white">Next Meeting</p>
                {filteredMeetings.length > 0 ? (
                    sortedMeetings.map(meeting => <MeetingCard key={meeting.id} meeting={meeting} />)
                ) : (
                    <p className="text-gray-400 text-center">No Meeting found</p>
                )}
            </div>
        </>
    )
}

export default MeetingContainer