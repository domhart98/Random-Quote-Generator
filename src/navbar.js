import React from 'react'
import Link from './link.js'
import './navbar.css'

const Navbar = () =>{
    return(
        <div id="navbar-container">
            <nav className="nav-menu">
                <ul>
                    <li className="nav-item">
                        <Link href="/" className="">Random Quote Generator</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/markdown" className="">Markdown Previewer</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/drum" className="">Drum Machine</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/calculator" className="">Calculator</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/clock" className="">Pomodoro Clock</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;