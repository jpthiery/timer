import React from "react";
import TimerShell from "./TimerShell";
import './digital-7.regular.ttf'

export default {
    title: "Design/Page/TimerShell",
    component: TimerShell
}

const Template = (args: any) => <TimerShell {...args}/>


export const Smallest = Template.bind({})
// @ts-ignore
Smallest.args = {
}