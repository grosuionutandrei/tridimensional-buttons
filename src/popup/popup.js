import React from "react";
import styles from './popup.module.css';
import { useState } from "react";
import { useRef } from "react";

export const Popup = (props)=>{
    const pop=useRef('');

    return (
        <div ref={pop} className={props.className}>
 {/*            <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={styles.closePop}>
  <line x1="0" y1="0" x2="5" y2="5" stroke="white" stroke-width="1"/>
  <line x1="0" y1="5" x2="5" y2="0" stroke="white" stroke-width="1"/>
</svg>
 */}
            <p className={styles.poptext}>{props.message}</p>
            {props.children}
        </div>
    )
}