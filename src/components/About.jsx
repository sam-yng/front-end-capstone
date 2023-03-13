import React from "react";
import '../css/index.css'
import placeholder from "../assets/ayyy.jpg"

const About = () => {
    return(
        <article className="md:max-w-[65vw] flex flex-col md:flex-row m-auto text-center md:justify-between mt-28 items-center">
            <div>
                <h1 className="text-[50px]">Little Lemon</h1>
                <h3 className="text-[30px]">Chicago</h3>
                <p className="md:max-w-[35vw] text-[25px] mt-6">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </p>
            </div>
            <img className="mt-8" alt="placeholder" width={350} src={placeholder} />
        </article>
    )
}

export default About