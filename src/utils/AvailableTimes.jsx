import React from "react";

const AvailableTimes = () => {
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

    const availableTimes = times.map(times => {
        return <option key={times.toString()}>{times}</option>
    })
    return availableTimes
}

export default AvailableTimes