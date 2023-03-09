import React from "react";
import placeholder from '../assets/ayyy.jpg'

const Footer = () => {
    return(
        <footer>
            <img width={100} src={placeholder} />
            <ul>
                <li>Doormat Navigation</li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <ul>
                <li>Contact</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul>
                <li>Social Media Links</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </footer>
    )
}

export default Footer