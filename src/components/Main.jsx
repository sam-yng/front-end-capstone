import React from "react";
import placeholder from "../assets/ayyy.jpg"
import "../css/index.css"

const Main = () => {
    return(
        <main className="md:max-w-[65vw] m-auto mt-28 bg-gray-400">
            <div className="flex flex-row justify-between">
                <h1 className="text-[40px]">Specials</h1>
                <button className="border-2 border-white bg-black text-white px-7 py-3 rounded-md">Online Menu</button>
            </div>

            <div className="mt-28">
                <h1 className="text-[30px] text-center">Testimonials</h1>
            </div>

            <article className="flex flex-col md:flex-row m-auto text-center md:justify-between mt-28 items-center">
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
        </main>
    )
}

export default Main