import React from "react";
import '../css/index.css'
import { useState } from "react";
import AvailableTimes from "../utils/AvailableTimes";
import Button from "./Button";

const Form = () => {
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState("")
    const [occasion, setOccasion] = useState("")

    const clearForm = () => {
        setDate("")
        setTime("")
        setGuests("")
        setOccasion("")
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(time)
        clearForm();
    };

    return(
        <>
            <form
                className="grid max-w-[65vw] gap-4 mt-10 justify-center m-auto"
                onSubmit={handleSubmit}
            >
                <h1 className="font-bold">Reservation Form</h1>
                <label htmlFor="date" className="border-2">Choose date</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => { setDate(e.target.value) }}
                />
                <label htmlFor="time" className="border-2">Choose time</label>
                <select
                    id="time"
                    value={time}
                    onChange={(e) => { setTime(e.target.value) }}
                >
                    <AvailableTimes />
                </select>
                <label htmlFor="guests" className="border-2">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => { setGuests(e.target.value) }}
                />
                <label htmlFor="occasion" className="border-2">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => { setOccasion(e.target.value) }}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input
                    type="submit"
                    value="Make Your reservation"
                    className="border-2 bg-black text-white px-2 py-2"
                />
            </form>
        </>
    )
}

export default Form