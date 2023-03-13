import React from "react";
import '../css/index.css'
import Review from "./Review";
import placeholder from '../assets/ayyy.jpg'

const Testimonials = () => {
    return (
        <div className="mt-28 max-w-[65vw] m-auto">
            <h1 className="text-[30px] text-center">Testimonials</h1>

            <div className="flex flex-row justify-between">
                <Review
                    name="Sam Young"
                    handle="Syng2"
                    text="Holy moly that was a feed I won't forget"
                    image={placeholder}
                />
                <Review
                    name="Jackson Mcclean"
                    handle="dJmixitUp"
                    text="I thoroughly enjoyed my meal at the little lemon restaurant, I'll be back in no time"
                    image={placeholder}
                />
                <Review
                    name="Adam Leslie"
                    handle="fypir"
                    text="My husband and I could not get enough of the greek salad!"
                    image={placeholder}
                />
                <Review
                    name="Max Bennet"
                    handle="m_bnnt69"
                    text="The service was fantastic and food came out in no time. Thanks little lemon!"
                    image={placeholder}
                />
            </div>
        </div>
    )
}

export default Testimonials