import React from "react";
import '../css/index.css'

const Review = (props) => {
    return(
        <>
            <h1>{props.rating}</h1>
            <img src={props.image} />
            <p>{props.text}</p>
        </>
    )
}