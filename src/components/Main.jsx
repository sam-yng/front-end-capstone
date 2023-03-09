import React from "react";
import placeholder from "../assets/ayyy.jpg"

const Main = () => {
    return(
        <main>
            <div>
                <h1>Specials</h1>
                <button>Online Menu</button>
            </div>

            <div>
                <h1>Testimonials</h1>
            </div>

            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </p>
            </div>
            <div>
                <img width={100} src={placeholder} />
                <img width={100} src={placeholder} />
            </div>
        </main>
    )
}

export default Main