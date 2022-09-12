import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'
import {log} from "util";

export type ItemsType = {
    title: string
    value: string
}
export type SelectPropsType = {
    value: any
    items: Array<ItemsType>
    onChange: (value: string) => void
}
export const Select = (props: SelectPropsType) => {
    const [collapse, setCollapse] = useState(false)
    const [hoveredElemValue, setHoveredElemValue] = useState(props.value)
    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hoveredElemValue)

    const onClickHandler = () => {
        setCollapse(!collapse)
    }

    const onChangeHandler = (value: string) => {
        props.onChange(value)
        setCollapse(!collapse)
    }

    const onBlurHandler = () => {
        setCollapse(false)
    };
    useEffect(() => {
        setHoveredElemValue(props.value)
    }, [props.value])

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElemValue) {
                    const keyValue = e.key === 'ArrowDown'? props.items[i + 1] :props.items[i - 1]
                    if (keyValue) {
                        props.onChange(keyValue.value)
                        return
                    }

                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }
            props.onChange(props.items[0].value)
        }
        if(e.key === 'Enter' || e.key === 'Escape'){
            setCollapse(false)
        }
    }

    return (
        <>

            <div className={s.select} onKeyDown={onKeyDownHandler} tabIndex={0}>
                <span className={s.main} onClick={onClickHandler}
                      onBlur={onBlurHandler}>{selectedItem && selectedItem.title} </span>
                {
                    !collapse ? null : <ul>
                        {
                            props.items.map((el, i) =>
                                <li className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                                    key={i}
                                    onMouseEnter={() => setHoveredElemValue(el.value)}
                                    onClick={() => onChangeHandler(el.value)}>{el.title}</li>)
                        }
                    </ul>
                }
            </div>
        </>
    );
};

