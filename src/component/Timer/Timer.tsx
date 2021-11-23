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

    const playSound = () => {
        // audio.play()
    }

    const pauseSound = () => {
        audio.pause()
    }

    const style_text = current_duration <= 10 ? 'pulsate' : ''


    useEffect(() => {
            if (current_duration > 1) {

                const id = setTimeout(() => {
                        setDuration(current_duration - 1)
                    },
                    1000)
                return () => {
                    pauseSound()
                    clearTimeout(id)
                }
            } else {
                const id = setTimeout(() => {
                        setFinished(true)
                    },
                    1000)
                return () => {
                    pauseSound()
                    clearTimeout(id)
                }
            }

        },
        [current_duration]
    )

    useEffect(() => {
            finished ? playSound() : pauseSound()
        },
        [finished])

    const text = !finished ? <p className={style_text}>{toHHMMSS(current_duration)}</p> : <div>
        <p className='pulsate'>Finished !</p>
        <p>
            <button onClick={e => {
                pauseSound()
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