import MeetingCard from "./MeetingCard"

function MeetingContainer({ meetings, currentFloor }) {

    const filteredMeetings = meetings.filter(m => m.floor === Number(currentFloor));

    console.log(meetings);

    return (
        <>
            <div className="p-10 flex flex-col gap-3">
                <p className="text-white">Next Meeting</p>
                {filteredMeetings.length > 0 ? (
                    filteredMeetings.map(meeting => <MeetingCard key={meeting.id} meeting={meeting} />)
                ) : (
                    <p className="text-white">ไม่มี meeting ในชั้นนี้</p>
                )}
            </div>
        </>
    )
}

export default MeetingContainer