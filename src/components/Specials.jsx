import React from "react";
import placeholder from "../assets/ayyy.jpg"
import "../css/index.css"
import Button from './Button'

const Specials = () => {
    return(
        <main className="md:max-w-[65vw] m-auto mt-28 ">
            <div className="flex flex-row justify-between">
                <h1 className="text-[40px]">Specials</h1>
                <Button text='Online Menu' />
            </div>

            {/* <Card /> */}
            {/* <Card /> */}
            {/* <Card /> */}
        </main>
    )
}

export default Specials