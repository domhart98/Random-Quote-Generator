import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './navbar.js'
import './layout.css'

const Layout = () =>{   
    return(
        <div className="wrapper">
            <Navbar/>
            <div className="body-wrapper"><Outlet/></div>
        </div>
    );
};
export default Layout;