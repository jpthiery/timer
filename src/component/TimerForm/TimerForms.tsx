import React, {SyntheticEvent, useState} from "react";
import toHHMMSS from "../../time_utils";
import './timerForms.css';

class TimerFormProps {
    constructor(
        public initial_duration: number,
        public start: (duration: number) => void
    ) {
    }
}

const TimerForms = ({initial_duration, start}: TimerFormProps) => {

    const [tmp_duration, setTmpDuration] = useState(initial_duration)

    const change = (value: string) => {
        const duration = parseInt(value, 10)
        if (duration) {
            setTmpDuration(duration)
        } else {
            setTmpDuration(0)
        }
    }

    const sub = () => {
        start(tmp_duration)
    }

    const onKeyUp = (e: any) => {
        if (e.keyCode === 13 ){
            e.preventDefault()
            sub()
        }
    }

    return (
        <div>
            <p>Duration: <input value={tmp_duration} onChange={e => change(e.target.value)} onKeyUp={e => onKeyUp(e)}/></p>
            <p>
                <button onClick={e => sub()}>Start for {toHHMMSS(tmp_duration)}</button>
            </p>
        </div>
    )
}

export default TimerForms
