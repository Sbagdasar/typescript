import React, {useReducer} from "react";
import {reducer} from "./reducerAccordion";

type UnControlAccordionPropsType = {
    titleValue: string;
}

function UnControlAccordion(props: UnControlAccordionPropsType) {
const state = {
    collapsed:false,
}
// const [collapsed, setCollapsed]= useState(false)
    const [collapsed, dispatch] =  useReducer(reducer,state)
    const setCollapse=()=>{

        dispatch({type:"TOGGLE-ACCORDION"})
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} callback={setCollapse}/>
           {!collapsed.collapsed &&
                <AccordionBody/>
            }
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    callback:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={()=>props.callback()}>{props.title} ---</h3>
}

function AccordionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UnControlAccordion;