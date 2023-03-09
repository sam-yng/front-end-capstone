import React from "react";
import Logo from "../assets/Logo.svg"
import hamburger from '../assets/ham.svg'

const Nav = () => {
    return(
        <nav className="md:max-w-[65vw] md:pt-14 pt-8 m-auto bg-gray-100">
            <ul className="hidden flex-row justify-between items-center md:flex">
                <li>
                   <a href="/"><img src={Logo} alt='logo' width={175} /></a>
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
            <ul className="md:hidden flex flex-row justify-between m-4">
                <img alt="logo" src={Logo} />
                <img alt="hamburger" src={hamburger} />
            </ul>
        </nav>
    )
}

export default Nav