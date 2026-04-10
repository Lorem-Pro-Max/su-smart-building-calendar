import calendarIcon from "../assets/icons/calendarIcon.svg"
import { useState, useEffect } from "react";

function Navbar({ date, floor, setFloor }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (dateObj) => {
        const pad = (n) => n.toString().padStart(2, "0");
        const h = pad(dateObj.getHours());
        const m = pad(dateObj.getMinutes());
        const s = pad(dateObj.getSeconds());
        return `${h}:${m}:${s} น.`;
    };

    const formatDate = (isoDate) => {
        const parts = String(isoDate).split("-");
        const dateObj =
            parts.length === 3
                ? new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]))
                : new Date(isoDate);
        const pad = (n) => n.toString().padStart(2, "0");
        const day = pad(dateObj.getDate());
        const month = pad(dateObj.getMonth() + 1);
        const year = dateObj.getFullYear() % 100;
        return `${day}/${month}/${pad(year)}`;
    };

    return (
        <div className="bg-black flex justify-between items-center h-18 w-full gap-7 py-2 px-10">
            <div className="flex gap-3">
                <div className="flex gap-4">
                    <img src={calendarIcon} className="w-5" />
                    <p className="text-white">{formatDate(date)}</p>
                </div>
                <p className="text-white">{formatTime(time)}</p>
            </div>
        </div>
    )
}

export default Navbar