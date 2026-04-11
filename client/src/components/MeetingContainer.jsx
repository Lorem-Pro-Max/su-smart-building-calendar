import MeetingCard from "./MeetingCard"
import { RoomMeetingLayout } from "./RoomDisplay"

function isMeetingOngoing(meeting, nowMs) {
    const start = new Date(meeting.start_dateTime).getTime();
    const end = new Date(meeting.end_dateTime).getTime();
    return start <= nowMs && end > nowMs;
}

function MeetingContainer({
    meetings,
    currentFloor,
    selectedRoomId = null,
    nowTick = null,
}) {

    let filteredMeetings = meetings.filter(m => m.floor === Number(currentFloor));
    if (selectedRoomId != null) {
        filteredMeetings = filteredMeetings.filter(
            (m) => Number(m.room_id) === Number(selectedRoomId)
        );
    }
    const sortedMeetings = [...filteredMeetings].sort((a, b) => {
        const timeA = new Date(a.start_dateTime).getTime();
        const timeB = new Date(b.start_dateTime).getTime();

        return timeA - timeB;
    });

    const nowMs = nowTick ?? Date.now();

    if (selectedRoomId != null) {
        const meetingNow = sortedMeetings.find((m) => isMeetingOngoing(m, nowMs)) ?? null;
        const nextMeeting =
            sortedMeetings.find(
                (m) => new Date(m.start_dateTime).getTime() > nowMs
            ) ?? null;

        return (
            <RoomMeetingLayout
                meetingNow={meetingNow}
                nextMeeting={nextMeeting}
            />
        );
    }

    const emptyMessage = "No Meeting found";

    return (
        <>
            <div className="p-10 flex flex-col gap-3 flex-1 overflow-y-auto min-h-0">
                <p className="text-white">Next Meeting</p>
                {sortedMeetings.length > 0 ? (
                    sortedMeetings.map(meeting => <MeetingCard key={meeting.id} meeting={meeting} />)
                ) : (
                    <p className="text-gray-400 text-center">{emptyMessage}</p>
                )}
            </div>
        </>
    )
}

export default MeetingContainer