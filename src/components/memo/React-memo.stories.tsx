import React, {useState} from 'react';
import {ReactMemo} from "./React-memo";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'React  memo',
    component: ReactMemo
} as ComponentMeta<typeof ReactMemo>;

export const ExampleCounter: ComponentStory<typeof ReactMemo> = (args) =>{
    return(
        <ReactMemo/>
    )
}
