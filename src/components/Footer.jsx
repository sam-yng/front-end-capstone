import React from "react";
import logo from '../assets/footer-logo.png'
import '../css/index.css'

const Footer = () => {
    return(
        <footer className="bg-gray-200">
            <article className="md:max-w-[65vw] flex flex-row m-auto p-6 justify-between mt-10">
                <img alt="placeholder" src={logo} className="w-[100px] h-[140px] mt-6" />
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
            </article>
        </footer>
    )
}

export default Footer