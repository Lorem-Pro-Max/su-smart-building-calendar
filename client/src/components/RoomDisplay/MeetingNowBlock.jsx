import { ClockCircleOutlined } from "@ant-design/icons";
import { formatMeetingTimeRange } from "./formatMeetingTimeRange";

export default function MeetingNowBlock({ meeting }) {
  if (!meeting) {
    return (
      <div className="flex flex-col gap-4 flex-1 min-w-0 pr-2">
        <p className="text-gray-500 text-sm">Meeting now</p>
        <p className="text-gray-400 text-center py-8">
          No meeting in progress
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 flex-1 min-w-0 pr-2">
      <p className="text-gray-500 text-sm">Meeting now</p>
      <h2 className="text-5xl text-gray-900 font-kanit leading-tight">
        {meeting.meeting_name}
      </h2>
      <div className="flex flex-wrap items-center gap-2">
        <ClockCircleOutlined className="text-[#D32F2F] text-5xl" />
        <span className="text-5xl text-[#D32F2F] font-kanit">
          {formatMeetingTimeRange(meeting)}
        </span>
      </div>
      <p className="text-lg text-gray-900 font-kanit">
        {meeting.firstname} {meeting.lastname}
      </p>
    </div>
  );
}
