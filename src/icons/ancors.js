import React from 'react';


export  const Link = (props)=>{


    return(
        <a href={props.href} className={props.className} target={props.target}>
            {props.children}
            </ a>
    )
}