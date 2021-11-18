import React, {useState} from "react";
import Timer from "../../component/Timer/Timer";
import TimerForms from "../../component/TimerForm/TimerForms";
import './orchestrator.css'

const Orchestrator = (props: any) => {

    const [duration, setDuration] = useState(0)

    if (duration > 0) {
        return (
            <div className="Orchestrator">
                <Timer duration={duration} end_callback={() => setDuration(0)}/>
            </div>
        )
    }

    return (

        <div className="Orchestrator">
            <TimerForms start={value => setDuration(value)}/>
        </div>
    )
}

export default Orchestrator