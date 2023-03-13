import React from "react";
import Logo from "../assets/Logo.svg"
import hamburger from '../assets/ham.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Nav = () => {
    return(
        <nav className="md:max-w-[65vw] md:pt-14 pt-8 m-auto  font-bold">
            <ul className="hidden flex-row justify-between items-center md:flex">
                <li className="mr-10">
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