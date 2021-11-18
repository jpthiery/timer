import React from "react";
import Orchestrator from "./Orchestrator";
import './digital-7.regular.ttf'

export default {
    title: "Design/Page/Orchestrator",
    component: Orchestrator
}

const Template = (args: any) => <Orchestrator {...args}/>


export const Smallest = Template.bind({})
// @ts-ignore
Smallest.args = {
}