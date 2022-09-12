import React from "react";
import {RatingValueType} from "./Rating";

type StarPropsType = {
    selected: boolean
    onClick:(value:RatingValueType)=>void
    value:RatingValueType
}

function Star(props: StarPropsType) {
    return (
        <span onClick={()=>props.onClick(props.value)}>
       {
           props.selected ? <b>Star </b> : " Star"
       }
        </span>
    )
}

export default Star