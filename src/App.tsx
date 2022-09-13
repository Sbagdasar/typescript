import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingPropsType, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlRating} from "./components/UnControlRating/UnControlRating";
import UnControlAccordion from "./components/UnControlAccordion/UnControlAccordion";
import {Input} from "./components/Input/Input";
import {ItemsType, Select} from "./components/Select/Select";
import {getSquarePositiveIntegers, getSum, getTriangleType, sum} from "./lesson_8/lesson_8";


function App() {
let [ratingValue, setRatingValue]=useState<RatingValueType>(0)
    let [onOff, setOnOff] = useState<boolean>(false)
    const [collapse,setCollapse] = useState(true)
    const [selectValue, setSelectValue] = useState('3')
    let arr:Array<ItemsType> = [{value: "1", title: 'Sam'},{value: "2", title: 'Eva'},{value: "3", title: 'Cheslava'}]
    return (
        <div>
            {/*<PageTitle title={"App title"}/>*/}
            {/*<PageTitle title={"App title2"}/>*/}

            <UnControlAccordion titleValue={'Menu 1'}/>
            {/*<UnControlRating/>*/}
            {/*<Accordion titleValue={'Accordion menu'} collapsed={collapse} onChange={()=>setCollapse(!collapse)} items={arr}  onClick={(value)=>{alert(value)}}/>*/}
            <br/>
            <br/>
            <br/>
            <Select value={selectValue} items={arr} onChange={(value)=>{setSelectValue(value)}}/>
            {/*<Accordion titleValue={'Accordion users'} collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff launched={onOff} callback={setOnOff}/>*/}
            {/*<OnOff launched={false}/>*/}
            {/*<Input/>*/}
        </div>
    );
}
type PageTitlePropsType={
    title:string
}
function PageTitle(props:PageTitlePropsType){

    return <div>{props.title}</div>
}

export default App;
