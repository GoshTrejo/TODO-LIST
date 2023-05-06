import React from "react";

const Input = ({val,oninput}) => {
    return <input placeholder="Enter task" className="input-task" type="text" onInput={oninput} value={val}></input>
}

export default Input;