import MeetingCard from "./MeetingCard"

function MeetingContainer() {
    return (
        <>
            <div className="p-10 flex flex-col gap-3">
                <p className="text-white">Next Meeting</p>
                <MeetingCard />
                <MeetingCard />
            </div>
        </>
    )
}

export default MeetingContainer