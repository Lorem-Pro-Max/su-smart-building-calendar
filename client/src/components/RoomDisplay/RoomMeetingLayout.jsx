import EnvironmentPanel from "./EnvironmentPanel";
import MeetingNowBlock from "./MeetingNowBlock";
import NextMeetingBar from "./NextMeetingBar";

export default function RoomMeetingLayout({ meetingNow, nextMeeting, roomId }) {
  return (
    <div className="flex flex-col flex-1 min-h-0 w-full bg-white">
      <div className="flex-1 flex flex-col lg:flex-row lg:min-h-0 min-h-0 overflow-hidden">
        <div className="flex-1 flex flex-col min-w-0 px-6 lg:pl-10 lg:pr-8 py-8 min-h-0 overflow-y-auto">
          <MeetingNowBlock meeting={meetingNow} />
        </div>
        <aside className="flex shrink-0 w-full min-w-[370px] lg:w-auto lg:max-w-lg lg:min-h-0">
          <EnvironmentPanel roomId={roomId} />
        </aside>
      </div>
      <NextMeetingBar meeting={nextMeeting} />
    </div>
  );
}
