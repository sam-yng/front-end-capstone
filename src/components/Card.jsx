import React from "react";
import '../css/index.css'

const Card = (props) => {
    return (
        <div className="flex flex-col">
            <img src={props.image} />

            <div className="flex flex-row">
                <h1>{props.dish}</h1>
                <h2>{props.price}</h2>
            </div>

            <p>{props.description}</p>

            <div>
                <button>Order a delivery</button>
                <img />
            </div>
        </div>
    )
}