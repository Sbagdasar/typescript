import React, {useMemo, useState} from 'react';


export default {
    title: 'Use  memo'
}

export const ExampleCounter = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultB = 1;
    let resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            // для эффекта торможения чтобы  глянуть на  юзмемо
            let fake = 0;
            while (fake < 1000000) {
                fake++
                const fakeVal = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])
    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return (
        <div>
            <input type="text" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input type="text" value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                A: {resultA}
            </div>
            <div>
                B: {resultB}
            </div>
        </div>
    );
};
const UsersComponent = (props: { users: Array<string> }) => {
    console.log(3)
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}
const Users = React.memo(UsersComponent)
export const ExampleWithRM = () => {

    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['sam', 'eva', 'chesya'])

    let newUsers = useMemo(() => {
        
        let  filteredUsers = users.filter(u => u.indexOf('e')>-1)
        return filteredUsers
    }, [users])
    const addUser = ()=>setUsers([...users, 'levon'+ new Date().getTime()])
    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>++</button>
            <hr/>
            <Users users={newUsers}/>
            <button onClick={addUser}>add  user</button>
        </div>
    );
}