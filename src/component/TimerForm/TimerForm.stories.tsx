import React from "react";
import TimerForms from "./TimerForms";
import '/src/fonts/digital-7.regular.ttf'

export default {
    title: "Design/Atome/TimerForms",
    component: TimerForms
}

const Template = (args: any) => <TimerForms {...args}/>

export const Smallest = Template.bind({})
// @ts-ignore
Smallest.args = {
    start: (duration: number) => {
        console.log(`Start for ${duration}`)
    }
}
