import React, {useMemo, useState, useCallback} from 'react';


export default {
    title: 'Use  callback'
}
const BooksComponent = (props: { books: Array<string> }) => {
    return (
        <div>
            {props.books.map((book, i) => <div key={i}>{book}</div>)}
        </div>
    )
}
const Users = React.memo(BooksComponent)
export const ExampleUseCallBack = () => {

    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(['sam', 'eva', 'chesya'])

    let newBooks = useMemo(() => {
        
        let  filteredBooks = books.filter(book => book.indexOf('e')>-1)
        return filteredBooks
    }, [books])
    const addUser = ()=>setBooks([...books, 'levon'+ new Date().getTime()])
    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>++</button>
            <hr/>
            <Users books={newBooks}/>
            <button onClick={addUser}>add  book</button>
        </div>
    );
}