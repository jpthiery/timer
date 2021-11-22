import React, {useEffect, useState} from "react";
import './timer.css'


class TimerProps {
    constructor(
        public duration: number,
        public end_callback: () => void
    ) {
    }
}

const Timer = ({duration, end_callback}: TimerProps) => {

    const [current_duration, setDuration] = useState(duration)
    const [finished, setFinished] = useState(false)

    const double_zero = (value: number) => {
        if (value < 10) {
            return `0${value}`
        } else {
            return value
        }

    }

    const toHHMMSS = (secs: number) => {
        const hours = Math.floor(secs / 3600)
        const minutes = Math.floor(secs / 60) % 60
        const seconds = secs % 60
        let res = hours > 0 ? `${double_zero(hours)}H` : ''
        res += `${double_zero(minutes)}:${double_zero(seconds)}`
        return res
    }

    useEffect(() => {
            if (current_duration > 0) {

                const id = setTimeout(() => {
                        setDuration(current_duration - 1)
                    },
                    1000)
                return () => {
                    clearTimeout(id)
                }
            } else {
                const id = setTimeout(() => {
                        setFinished(true)
                    },
                    1000)
                return () => {
                    clearTimeout(id)
                }
            }

        },
        [current_duration]
    )

    const text = !finished ? toHHMMSS(current_duration) : <div>
        <p>Finished !</p>
        <p>
            <button onClick={e => end_callback()}>Reset</button>
        </p>
    </div>
    return (
        <p style={{fontFamily: "Digital-7"}}>{text}</p>
    )
}

export default Timer