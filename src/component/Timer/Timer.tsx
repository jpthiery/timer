import React, {useEffect, useState} from "react";
import toHHMMSS from "../../time_utils";
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

    const audio = new Audio('http://streaming.tdiradio.com:8000/house.mp3')


    useEffect(() => {
            if (current_duration > 0) {

                const id = setTimeout(() => {
                        setDuration(current_duration - 1)
                    },
                    1000)
                return () => {
                    audio.pause()
                    clearTimeout(id)
                }
            } else {
                const id = setTimeout(() => {
                        setFinished(true)
                    },
                    1000)
                return () => {
                    audio.pause()
                    clearTimeout(id)
                }
            }

        },
        [current_duration]
    )

    useEffect(() => {
            finished ? audio.play() : audio.pause()
        },
        [finished])

    const text = !finished ? toHHMMSS(current_duration) : <div>
        <p>Finished !</p>
        <p>
            <button onClick={e => {
                audio.pause()
                end_callback()
            }}>Reset
            </button>
        </p>
    </div>
    return (
        <p style={{fontFamily: "Digital-7"}}>{text}</p>
    )
}

export default Timer