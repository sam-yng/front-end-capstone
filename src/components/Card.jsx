import React from "react";
import '../css/index.css'

const Card = (props) => {
    return (
        <div className="flex flex-col m-6 p-4 justify-center">
            <img alt={props.dish} className="object-contain h-44" src={props.image} />

            <article className="">
                <div className="flex flex-row justify-between mt-4">
                    <h1>{props.dish}</h1>
                    <h2>{props.price}</h2>
                </div>

                <p className="mt-4">{props.description}</p>

                <div className="mt-4">
                    <button>Order a delivery</button>
                    <img />
                </div>
            </article>
        </div>
    )
}

export default Card