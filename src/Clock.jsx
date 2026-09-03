import { useEffect, useState } from "react";

let Clock = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <>
            <h2>{time}</h2>
        </>
    );
};

export default Clock;