import Navbar from "../components/Navbar"
import Header from "../components/Header"
import MeetingContainer from "../components/MeetingContainer"
import { LoadingScreen } from "../components/common/LoadingScreen"

import { useEffect, useState } from "react"
import { getUpcomingBookings } from "../services/getMeeting"

const API_POLL_MS = 5 * 60 * 1000;
const NOW_TICK_MS = 30 * 1000;

function Calendar() {
    const [floor, setFloor] = useState(3)
    const [selectedRoomId, setSelectedRoomId] = useState(null)
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false)
    const [nowTick, setNowTick] = useState(() => Date.now())

    const today = (() => {
        const d = new Date();
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${y}-${m}-${day}`;
    })();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const now = new Date();
                const data = await getUpcomingBookings(now, floor);
                setBookings(data);
            } finally {
                setLoading(false)
            }
        };
        fetchData();

        const interval = setInterval(fetchData, API_POLL_MS);

        return () => clearInterval(interval);
    }, [floor]);

    useEffect(() => {
        const tick = setInterval(() => setNowTick(Date.now()), NOW_TICK_MS);
        return () => clearInterval(tick);
    }, []);

    return (<>
        {loading && <LoadingScreen />}
        <div
            className={
                selectedRoomId != null
                    ? "w-full h-screen bg-black flex flex-col overflow-hidden"
                    : "w-full h-screen bg-gradient-to-r from-[#434343] to-black flex flex-col overflow-hidden"
            }
        >
            <Navbar date={today} floor={floor} setFloor={setFloor} />
            <Header
                floor={floor}
                setFloor={setFloor}
                setSelectedRoomId={setSelectedRoomId}
            />
            {selectedRoomId != null ? (
                <div className="flex-1 flex flex-col min-h-0 bg-white">
                    <MeetingContainer
                        meetings={bookings}
                        currentFloor={floor}
                        selectedRoomId={selectedRoomId}
                        nowTick={nowTick}
                    />
                </div>
            ) : (
                <MeetingContainer
                    meetings={bookings}
                    currentFloor={floor}
                    selectedRoomId={selectedRoomId}
                    nowTick={nowTick}
                />
            )}
        </div>
    </>)
}

export default Calendar