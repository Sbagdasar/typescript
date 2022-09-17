import React, {useState} from 'react';

export const ReactMemo = () => {
    const [counter, setCounter] = useState<number>(0)
    return (
        <div>
            <div>{counter}</div>
        </div>
    );
};
