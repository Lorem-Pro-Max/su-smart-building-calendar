import calendarIcon from "../../public/icons/calendarIcon.svg"

function Navbar() {
    return (
        <div className="bg-black flex h-18 w-full gap-7 py-2 px-10">
            <div className="flex gap-4">
                <img src={calendarIcon} className="w-5" />
                <p className="text-white">17/12/25</p>
            </div>
            <p className="text-white">08:30:11 น.</p>
        </div>
    )
}

export default Navbar