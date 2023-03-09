import React from "react";
import placeholder from '../assets/ayyy.jpg'
import '../css/index.css'

const Footer = () => {
    return(
        <footer className="flex flex-row md:max-w-[65vw] m-auto justify-between mt-28 bg-gray-200">
            <img alt="placeholder" width={120} src={placeholder} />
            <ul>
                <li className="font-bold">Doormat <br></br> Navigation</li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <ul>
                <li className="font-bold">Contact</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul>
                <li className="font-bold">Social Media Links</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </footer>
    )
}

export default Footer