import React from 'react'
import Link from './link.js'
import './navbar.css'

const Navbar = () =>{
    return(
        <div  className="nav-menu" id="navbar-container">
            <ul>
                <li className="nav-item">
                    <Link href="/" className="">RANDOM QUOTE GENERATOR</Link>
                </li>
                <li className="nav-item">
                    <Link href="/markdown" className="">MARKDOWN PREVIEWER</Link>
                </li>
                <li className="nav-item">
                    <Link href="/drum" className="">DRUM MACHINE</Link>
                </li>
                <li className="nav-item">
                    <Link href="/calculator" className="">CALCULATOR</Link>
                </li>
                <li className="nav-item">
                    <Link href="/clock" className="">POMODORO CLOCK</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;