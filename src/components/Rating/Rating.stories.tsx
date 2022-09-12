import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";
import {action, actions} from "@storybook/addon-actions";

export default {
    title: 'Rating stories',
    component: Rating
} as ComponentMeta<typeof Rating>;

export const EmptyRatings: ComponentStory<typeof Rating> = (args) =>{
    return(
        <Rating {...args}/>
    )
}
export const EmptyRatings1: ComponentStory<typeof Rating> = (args) =><Rating value={1} onClick={action('t')}/>
export const EmptyRatings2: ComponentStory<typeof Rating> = (args) =><Rating value={2} onClick={x=>x}/>
export const EmptyRatings3: ComponentStory<typeof Rating> = (args) =><Rating value={3} onClick={x=>x}/>
export const EmptyRatings4: ComponentStory<typeof Rating> = (args) =><Rating value={4} onClick={x=>x}/>
export const RatingChange: ComponentStory<typeof Rating> = (args) =>{
    debugger
    let [value, setValue] = useState<RatingValueType>(2)

    return(
        <Rating value={value} onClick={setValue}/>)
}
export const Secondary = EmptyRatings.bind({});
Secondary.args = {
    value: 0,
};