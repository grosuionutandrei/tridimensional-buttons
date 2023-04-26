import React from 'react';

export const Container =(props)=>{

    return (
        <ul className={props.className}>
            {props.children}
        </ul>
    )
}