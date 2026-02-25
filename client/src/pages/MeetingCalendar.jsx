import Navbar from "../components/Navbar"
import Header from "../components/Header"
import MeetingContainer from "../components/MeetingContainer"

function Calendar() {
    return (<>
        <div className="w-full h-screen bg-gradient-to-r from-[#434343] to-black">
            <Navbar />
            <Header />
            <MeetingContainer />
        </div>
    </>)
}

export default Calendar