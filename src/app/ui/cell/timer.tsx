import { useState } from "react";
import { setInterval } from "timers";
export default function Timer() {
    const [time, setTime] = useState(new Date());
    setInterval(() => setTime(new Date()), 1000)
    return (
        <div>
            {time.toLocaleDateString().concat(" ").concat(time.toLocaleTimeString())}
        </div>
    )
}