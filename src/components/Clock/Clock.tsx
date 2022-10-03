import React, {useEffect, useState} from "react";
type ClockPropsType={

}
const get2DigitNumber = (num:number)=> num< 10? '0'+num:num

export const Clock:React.FC<ClockPropsType> =(props)=>{
    const [date, setDate] = useState(new Date())
    useEffect(()=>{
        const id =setInterval(()=>{
            setDate(new Date())
        },1000)

        return ()=>{
            clearInterval(id)
        }
    },[])

    const seconds = get2DigitNumber(date.getSeconds())
    const minutes = get2DigitNumber(date.getMinutes())
    const hours = get2DigitNumber(date.getHours())

    return(
        <div>
            <span>{hours}</span>
            :
            <span>{minutes}</span>
            :
            <span>{seconds}</span>

        </div>
    )
}