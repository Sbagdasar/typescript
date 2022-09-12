import React from 'react';
import css from "./onOff.module.css"
type OnOffPropsType = {
    launched:boolean
    callback:(launched:boolean)=>void
}
export const OnOff: React.FC<OnOffPropsType> = (props) => {
    return (
        <div className={css.onOffBtns}>
            <div className={`${css.onBtn} ${props.launched && css.onned}`} onClick={()=>props.callback(true)}>On</div>
            <div className={`${css.offBtn} ${!props.launched && css.offed}`} onClick={()=>props.callback(false)}>Off</div>
            <div className={`${css.lamp} ${(props.launched && css.onned)|| (!props.launched && css.offed)}`}></div>
        </div>
    );
};
