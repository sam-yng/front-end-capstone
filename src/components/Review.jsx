import React from "react";
import '../css/index.css'

const Review = (props) => {
    return(
        <div className="flex flex-col max-w-[14vw] h-[24vh] mt-16 p-2 border-2 border-black">
            <div className="flex flex-row mt-4">
                <img alt={props.handle} src={props.image} className="max-w-[60px] mr-4" />
                <div className="flex flex-col">
                    <h1 className="text-[14px]">{props.name}</h1>
                    <h1 className="text-[14px]">{props.handle}</h1>
                </div>
            </div>
            <p className="text-[14px] mt-4">"{props.text}"</p>
        </div>
    )
}

export default Review