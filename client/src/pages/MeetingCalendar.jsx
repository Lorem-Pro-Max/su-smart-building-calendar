import Navbar from "../components/Navbar"
import Header from "../components/Header"
import MeetingContainer from "../components/MeetingContainer"
import { LoadingScreen } from "../components/common/LoadingScreen"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getUpcomingBookings } from "../services/getMeeting"

function Calendar() {
    const [floor, setFloor] = useState(1)
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false)

    const today = new Date().toISOString().split("T")[0];

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
    }, [floor]);

    return (<>
        {loading && <LoadingScreen />}
        <div className="w-full h-screen bg-gradient-to-r from-[#434343] to-black flex flex-col overflow-hidden">
            <Navbar date={today} floor={floor} setFloor={setFloor} />
            <Header floor={floor} />
            <MeetingContainer meetings={bookings} currentFloor={floor} />
        </div>
    </>)
}

export default Calendar