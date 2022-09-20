import React, {useState} from 'react';

export const UseCallback = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    return (
        <div>
            <input type="text" value={a}  onChange={(e)=>setA(+e.currentTarget.value)}/>
            <input type="text" value={b}  onChange={(e)=>setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                {a}
            </div>
            <div>
                {b}
            </div>
        </div>
    );
};

