import React from "react";
import styles from './popup.module.css';
import { useState } from "react";

export const Popup = (props)=>{


    return (
        <div className={props.className}>
            <p className={styles.poptext}>{props.message}</p>
            {props.children}
        </div>
    )
}