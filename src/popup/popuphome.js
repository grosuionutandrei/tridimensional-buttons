import React  from "react";
import style from './popup.module.css'

export const Pophome=(props)=>{



    return (
        <div className={`${style.pophome} ${props.className}`}>
            {props.children}
        </div>
    )
}