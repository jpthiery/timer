import React, {useState} from "react";
import Timer from "../../component/Timer/Timer";
import TimerForms from "../../component/TimerForm/TimerForms";
import './timershell.css'

const TimerShell = (props: any) => {

    const [duration, setDuration] = useState(0)

    let content = <TimerForms start={value => setDuration(value)}/>

    if (duration > 0) {
        content = <Timer duration={duration} end_callback={() => setDuration(0)}/>
    }

    return (

        <div className="TimerShell">
            {content}
        </div>
    )
}

export default TimerShell