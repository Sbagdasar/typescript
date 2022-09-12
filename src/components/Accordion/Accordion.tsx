import React from "react";
import exp from "constants";
export type ItemsType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
   // items: Array<string>//string[]
    items: Array<ItemsType>
    onChange:()=>void
    onClick: (value:any)=>void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
           {!props.collapsed &&
                <AccordionBody items={props.items} onClick={props.onClick}/>
            }
        </div>
    )
}


// title
type AccordionTitlePropsType = {
    title: string
    onChange:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={(e)=>props.onChange()}>{props.title}</h3>
}

//body
export type AccordionBodyPropsType = {
    items:Array<ItemsType>
    onClick: (value:any)=>void
}
function AccordionBody(props:AccordionBodyPropsType) {

    return (
        <ul>
            {
                props.items.map((item,index) =><li key={index} onClick={()=>props.onClick(item.value)}>{item.value}</li>)
            }
        </ul>
    )
}

export default Accordion;