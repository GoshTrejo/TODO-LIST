import React from "react";

const Button =({click,val})=>{
    return <button className="btn" onClick={click} >{val}</button>
}

export default Button;

