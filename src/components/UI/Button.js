import React from 'react';
import "./Button.css";

const Button = (props) => {

    return(
        <button type={props.type || "button"} onClick={props.clickHandler} value={props.value}>{props.children}</button>
    );

}


export default Button;