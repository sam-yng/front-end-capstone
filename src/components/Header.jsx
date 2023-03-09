import React from "react";
import placeholder from "../assets/ayyy.jpg"

const Header = () => {
    return(
        <>
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </p>
                <button>Reserve a Table</button>
            </div>
            <div>
                <img width={100} src={placeholder} />
            </div>
        </>
    )
}

export default Header