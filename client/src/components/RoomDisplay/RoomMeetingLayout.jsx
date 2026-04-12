import EnvironmentPanel from "./EnvironmentPanel";
import MeetingNowBlock from "./MeetingNowBlock";
import NextMeetingBar from "./NextMeetingBar";

export default function RoomMeetingLayout({ meetingNow, nextMeeting, roomId }) {
  return (
    <div className="flex flex-col flex-1 min-h-0 w-full bg-white">
      <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-10 px-6 lg:px-10 py-8 min-h-0 overflow-y-auto">
        <MeetingNowBlock meeting={meetingNow} />
        <div className="flex justify-end lg:justify-start lg:shrink-0">
          <EnvironmentPanel roomId={roomId} />
        </div>
      </div>
      <NextMeetingBar meeting={nextMeeting} />
    </div>
  );
}
