import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ItemsType, Select} from "./Select";

export default {
    title: 'Select',
    component: Select
} as ComponentMeta<typeof Select>;

export const SelectStorie: ComponentStory<typeof Select> = (args) =>{
    const [value, setValue] = useState('1')
    let arr:Array<ItemsType> = [{value: "1", title: 'Sam'},{value: "2", title: 'Eva'},{value: "3", title: 'Cheslava'}]
    const onChangeHandler = (value:string)=>{
        setValue(value)
    }
    return(
        <Select value={value} items={arr} onChange={onChangeHandler}/>
    )
}

