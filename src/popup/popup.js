import React from "react";
import styles from './popup.module.css';

export const Popup = (props)=>{
    return (
        <div className={`${styles.popbody} ${props.className}`}>
            <p className={styles.poptext}>{props.message}</p>
            {props.children}
        </div>
    )
}