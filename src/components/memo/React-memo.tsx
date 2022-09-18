import React, {useState} from 'react';
export const UsersComponent=(props:{users:Array<string>})=>{
    return(
        <div>
            {props.users.map((u,i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersComponent)
export const ReactMemo = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['sam','eva','chesya'])
    return (
        <div>
            <div>{counter}</div>
            <button onClick={()=>setCounter(counter+1)}>++</button>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

