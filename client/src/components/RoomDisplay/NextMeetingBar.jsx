import { ClockCircleOutlined } from "@ant-design/icons";
import { formatMeetingTimeRange } from "./formatMeetingTimeRange";

export default function NextMeetingBar({ meeting }) {
  return (
    <div className="w-full shrink-0 bg-[#F0F9FF] border-t border-sky-100 px-6 py-5">
      <p className="text-gray-900 font-bold text-lg mb-3 font-kanit">Next</p>
      {!meeting ? (
        <p className="text-gray-500 font-kanit">ไม่มีการประชุมถัดไป</p>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
            <ClockCircleOutlined className="text-[#26A69A] text-lg" />
            <span className="text-lg md:text-xl font-bold text-[#26A69A] font-kanit">
              {formatMeetingTimeRange(meeting)}
            </span>
            <span className="text-lg md:text-xl font-bold text-gray-900 font-kanit">
              {meeting.meeting_name}
            </span>
          </div>
          <p className="text-base text-gray-800 font-kanit pl-0 md:pl-8">
            {meeting.firstname} {meeting.lastname}
          </p>
        </div>
      )}
    </div>
  );
}
