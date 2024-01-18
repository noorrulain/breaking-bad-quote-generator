import React from "react";

function Button(props){
    return <button onClick={props.buttonClick}>Generate New Quote</button>;
}

export default Button;