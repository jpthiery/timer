import React, {useState} from "react";
import Timer from "../../component/Timer/Timer";
import TimerForms from "../../component/TimerForm/TimerForms";
import './timershell.css'

const TimerShell = (props: any) => {

    const [duration, setDuration] = useState(0)
    const [edit_mode, setEditMod] = useState(true)

    const start_timer = (value: number) => {
        setDuration(value)
        setEditMod(false)
    }

    let content = <TimerForms
        initial_duration={duration}
        start={start_timer}/>

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