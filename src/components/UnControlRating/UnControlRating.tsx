import React, {useState} from "react";

type UnControlRatingPropsType = {
    // value: number // принимает абсолютно любое число, нам нужны определенные поэтому пишем ниже
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UnControlRating(props: UnControlRatingPropsType) {
    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} callback={setValue} value={1}/>
            <Star selected={value > 1} callback={setValue} value={2}/>
            <Star selected={value > 2} callback={setValue} value={3}/>
            <Star selected={value > 3} callback={setValue} value={4}/>
            <Star selected={value > 4} callback={setValue} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    callback: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={()=>props.callback(props.value)}>
            {props.selected ? <b> Star </b> : ' star'}
        </span>
    )
}