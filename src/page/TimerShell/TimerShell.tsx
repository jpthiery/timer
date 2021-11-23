import React, {useState} from "react";
import Timer from "../../component/Timer/Timer";
import TimerForms from "../../component/TimerForm/TimerForms";
import './timershell.css'
import toHHMMSS from "../../time_utils";

const TimerShell = (props: any) => {

    const [duration, setDuration] = useState(0)
    const [edit_mode, setEditMod] = useState(true)

    const start_timer = (value: number) => {
        setDuration(value)
        setEditMod(false)
    }

    const predefined_time = [120, 240, 300, 600, 1200]
        .map(
            t => (
                <p>
                    <button onClick={e => start_timer(t)}>Start for {toHHMMSS(t)}</button>
                </p>
            )
        )
    let content = <div>
        <TimerForms
            initial_duration={duration}
            start={start_timer}/>
        {predefined_time}

    </div>

    if (!edit_mode) {
        content = <Timer duration={duration} end_callback={() => setEditMod(true)}/>
    }

    return (

        <div className="TimerShell">
            {content}
        </div>
    )
}

export default TimerShell