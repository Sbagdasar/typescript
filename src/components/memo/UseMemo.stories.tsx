import React, {useMemo, useState} from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {UseMemo} from "./UseMemo";

export default {
    title: 'Use  memo',
    component: UseMemo
} as ComponentMeta<typeof UseMemo>;

export const ExampleCounter: ComponentStory<typeof UseMemo> = (args) =>{
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultB = 1;
    let resultA = useMemo(()=>{
        let tempResultA = 1
        for (let i = 1; i <=a ; i++) {
            // для эффекта торможения чтобы  глянуть на  юзмемо
            let fake = 0;
            while (fake<100000000){
                fake++
                const fakeVal = Math.random()
            }
            tempResultA*=i
        }
        return tempResultA
    }, [a])
    for (let i = 1; i <=b ; i++) {
        resultB*=i
    }
    return (
        <div>
            <input type="text" value={a}  onChange={(e)=>setA(+e.currentTarget.value)}/>
            <input type="text" value={b}  onChange={(e)=>setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
              A:   {resultA}
            </div>
            <div>
               B:  {resultB}
            </div>
        </div>
    );
};
