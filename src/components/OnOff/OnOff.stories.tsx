import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action, actions} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff stories',
    component: OnOff
} as ComponentMeta<typeof OnOff>;

export const OnOffStoriesOff: ComponentStory<typeof OnOff> = (args) =>{
    return(
        <OnOff launched={false} callback={x=>x}/>
    )
}
export const OnOffStoriesOn: ComponentStory<typeof OnOff> = (args) =>{
    return(
        <OnOff launched={true} callback={action('turn on')}/>
    )
}
export const OnOffStoriesChange: ComponentStory<typeof OnOff> = (args) =>{
    let [value, setValue]=useState<boolean>(false)
    return(
        <OnOff launched={value} callback={setValue}/>
    )
}
