import React, {useMemo, useState, useCallback} from 'react';


export default {
    title: 'Use  callback'
}
const BooksComponent = (props: { books: Array<string>, callback: () => void }) => {
    console.log(11)
    return (
        <div>
            {props.books.map((book, i) => <div key={i}>{book}</div>)}
            <button onClick={() => props.callback()}>add book</button>
        </div>
    )
}
const Books = React.memo(BooksComponent)
export const ExampleUseCallBack = () => {

    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(['html', 'css', 'js'])

    const memorizedCallback = useMemo(() => {
        return () => setBooks([...books, 'angular' + new Date().getTime()])
    }, [books])

    const memorizedCallback2 = useCallback(
        () => setBooks([...books, 'angular' + new Date().getTime()])
        , [books])
    return (
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>++</button>
            <hr/>
            <Books books={books} callback={memorizedCallback2}/>

        </div>
    );
}