import React from "react";
import Logo from "../assets/Logo.svg"
import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <ul>
                <li>
                   <a href="/"><img src={Logo} alt='logo' /></a>
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
        </nav>
    )
}

export default Nav