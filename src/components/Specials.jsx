import React from "react";
import Card from "./Card";
import "../css/index.css"
import Button from './Button'
import salad from '../assets/greeksalad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemon from '../assets/lemondessert.jpg'

const Specials = () => {
    return(
        <main className="md:max-w-[65vw] m-auto mt-24">
            <div className="flex flex-row justify-between">
                <h1 className="text-[40px]">Specials</h1>
                <Button text='Online Menu' />
            </div>
            <div className="flex flex-row mt-16">
                <Card
                    image={salad}
                    dish="Greek salad"
                    price="$12.99"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                />
                <Card
                    image={bruchetta}
                    dish="Bruchetta"
                    price="$5.99"
                    description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                />
                <Card
                    image={lemon}
                    dish="Lemon Dessert"
                    price="$5.00"
                    description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                />
            </div>
        </main>
    )
}

export default Specials