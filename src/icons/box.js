import React from 'react';



import style from  '../presentation/box.module.css';

export const Box=(props)=>{
  

    return (
        <li className={`${style.container} ${style.edges} ${style[props.styleName]}`}>{props.children}
   
        </li>
    )
}