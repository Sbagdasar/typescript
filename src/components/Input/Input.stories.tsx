import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action, actions} from "@storybook/addon-actions";
import {Input} from "./Input";
import buttonStories from "../../stories/Button.stories";

export default {
    title: 'Input',
    ///component: Input
} //as ComponentMeta<typeof Input>;

/*
export const UncontrolledInput: ComponentStory<typeof Input> = (args) =>{

    return(
        <Input/>
    )
}*/
/*export const TrackUncontrolledInputValueWithRef = ()=>{
    const [value, setValue] = useState<string>('')
    const valueRef = useRef<HTMLInputElement>(null)
    const  onclickHandler=()=>{
        const el = valueRef.current as HTMLInputElement
        setValue(el.value)
    }

    return(<>
            <input ref={valueRef}/>
            <button onClick={onclickHandler}>Show value</button>
            <span> {value}</span>
        </>
    )
}*/

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <input value={parentValue} onChange={onChangeHandler}/>
    )
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Grodno</option>
            <option value="3">Vilnus</option>
        </select>
    )
}