import React from 'react'
//import Link from './link.js'
import './navbar.css'

const Navbar = () =>{
    return(
        <div id="navbar-container">
            <nav className="nav-menu">
                <ul>
                    <li className="nav-item">
                        <a href="/" className="">Random Quote Generator</a>
                    </li>
                    <li className="nav-item">
                        <a href="/markdown" className="">Markdown Previewer</a>
                    </li>
                    <li className="nav-item">
                        <a href="/drum" className="">Drum Machine</a>
                    </li>
                    <li className="nav-item">
                        <a href="/calculator" className="">Calculator</a>
                    </li>
                    <li className="nav-item">
                        <a href="/clock" className="">Pomodoro Clock</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;