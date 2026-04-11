export function formatMeetingTimeRange(meeting) {
  const opts = { hour: "2-digit", minute: "2-digit" };
  const start = new Date(meeting.start_dateTime).toLocaleTimeString(
    "th-TH",
    opts
  );
  const end = new Date(meeting.end_dateTime).toLocaleTimeString("th-TH", opts);
  return `${start}–${end} น.`;
}
