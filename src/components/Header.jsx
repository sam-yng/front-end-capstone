import React from "react";
import placeholder from "../assets/ayyy.jpg"
import "../css/index.css"

const Header = () => {
    return(
        <main className="flex md:flex-row flex-col md:max-w-[65vw] md:m-auto md:justify-between md:mt-10 text-center items-center bg-gray-300">
            <div>
                <h1 className="text-[50px]">Little Lemon</h1>
                <h3 className="text-[30px]">Chicago</h3>
                <p className="md:max-w-[35vw] text-[25px] mt-6">
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </p>
                <button className="border-2 mb-10 mt-6 border-white bg-black text-white px-7 py-3 rounded-md">Reserve a Table</button>
            </div>
            <div>
                <img alt="placeholder" width={350} src={placeholder} />
            </div>
        </main>
    )
}

export default Header