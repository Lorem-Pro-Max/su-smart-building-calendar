import calendarIcon from "../assets/icons/calendarIcon.svg"
import { Button, Dropdown } from 'antd';
import { useState, useEffect } from "react";

function Navbar({ date, floor, setFloor }) {
    const [time, setTime] = useState(new Date());

    const items = Array.from({ length: 5 }, (_, i) => ({
        key: (i + 1).toString(),
        label: <p>ชั้น {i + 1}</p>,
    }));

    const onClick = ({ key }) => {
        setFloor(key)
    };

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval); // ล้าง interval ตอน unmount
    }, []);

    const formatTime = (dateObj) => {
        const pad = (n) => n.toString().padStart(2, "0");
        const h = pad(dateObj.getHours());
        const m = pad(dateObj.getMinutes());
        const s = pad(dateObj.getSeconds());
        return `${h}:${m}:${s} น.`;
    };

    const formatDate = (isoDate) => {
        const dateObj = new Date(isoDate);
        const pad = (n) => n.toString().padStart(2, "0");
        const day = pad(dateObj.getDate());
        const month = pad(dateObj.getMonth() + 1);
        const year = dateObj.getFullYear() % 100; // 2 หลักท้ายของปี
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
            <Dropdown menu={{ items, onClick }} placement="bottom">
                <Button onClick={e => e.preventDefault()}>ชั้น {floor}</Button>
            </Dropdown>
        </div>
    )
}

export default Navbar