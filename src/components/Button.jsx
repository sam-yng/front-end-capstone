import React from "react";
import '../css/index.css'

const Button = (props) => {
    return(
        <>
            <button className="border-2 bg-[#F4CE14] border-[#F4CE14] font-bold px-7 py-3 rounded-md">{props.text}</button>
        </>
    )
}

export default Button