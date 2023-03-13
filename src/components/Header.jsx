import React from "react";
import placeholder from "../assets/ayyy.jpg"
import "../css/index.css"
import Button from "./Button";

const Header = () => {
    return(
        <main className="bg-[#495E57]">
            <article className="flex md:flex-row max-w-[65vw] flex-col md:m-auto md:justify-between md:mt-10 md:text-left text-center items-center">
                <div className="mb-10">
                    <h1 className="text-[50px] text-[#F4CE14]">Little Lemon</h1>
                    <h3 className="text-[30px] text-white">Chicago</h3>
                    <p className="md:max-w-[35vw] text-white text-[25px] mt-6 mb-6">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </p>
                    <Button text="Reserve a Table" />
                </div>
                <div>
                    <img alt="placeholder" width={350} src={placeholder} />
                </div>
            </article>
        </main>
    )
}

export default Header