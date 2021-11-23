import React from "react";
import Timer from "./Timer";

export default {
    title: "Design/Atome/Timer",
    component: Timer
}

const Template = (args: any) => <Timer {...args}/>


export const Smallest = Template.bind({})
// @ts-ignore
Smallest.args = {
    duration: 10,
    end_callback: () => {
        console.log('end')
    }
}

export const Minute = Template.bind({})
// @ts-ignore
Minute.args = {
    duration: 90,
    end_callback: () => {
        console.log('end')
    }
}

export const Hour = Template.bind({})
// @ts-ignore
Hour.args = {
    duration: 3700,
    end_callback: () => {
        console.log('end')
    }
}

