import React, {KeyboardEvent, useEffect, useState} from 'react';
import {ItemsType, SelectPropsType} from "./Select";
import s from "./Select.module.css";

export default {
    title: 'Select withMemo'
}


export const SelectStorieMemo= () =>{
    const [selectValue, setSelectValue] = useState('3')
    let arr:Array<ItemsType> = [{value: "1", title: 'Sam'},{value: "2", title: 'Eva'},{value: "3", title: 'Cheslava'}]

    const [collapse, setCollapse] = useState(false)
    const [hoveredElemValue, setHoveredElemValue] = useState(selectValue)
    const selectedItem = arr.find(el => el.value === selectValue)
    const hoveredItem = arr.find(el => el.value === hoveredElemValue)

    const onClickHandler = () => {
        setCollapse(!collapse)
    }

    const onChangeHandler = (value: string) => {
        setSelectValue(value)
        setCollapse(!collapse)
    }

    const onBlurHandler = () => {
        setCollapse(false)
    };
    useEffect(() => {
        setHoveredElemValue(selectValue)
    }, [setSelectValue])

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].value === hoveredElemValue) {
                    const keyValue = e.key === 'ArrowDown'? arr[i + 1] :arr[i - 1]
                    if (keyValue) {
                        setSelectValue(keyValue.value)
                        return
                    }

                }
            }
            if(!selectedItem){
                setSelectValue(arr[0].value)
            }
            setSelectValue(arr[0].value)
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
                           arr.map((el, i) =>
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
}

