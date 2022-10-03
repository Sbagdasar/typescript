import React, {useEffect, useState} from 'react';

export default {
    title: 'Use  Effect'
}

export const UseEffect = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(()=>{
        document.title = counter.toString()
    }) // вызывается каждый раз
    useEffect(()=>{
        document.title = counter.toString()
    },[]) // вызывается 1 раз
    useEffect(()=>{
        document.title = counter.toString()
    },[counter])// зависит от counter

    return (
        <div>
            {fake} - {counter}
            <button onClick={()=>setFake(fake+1)}>fake +</button>
            <button onClick={()=>setCounter(counter+1)}>counter +</button>
        </div>
    );
};

