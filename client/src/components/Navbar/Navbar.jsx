import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <>
    <header>
        <a className="navbar-brand" href="/" >
           {/* <img src="/Navbar/library_img.jpeg" width="30" height="30" alt=""/>  */}
            E-library
        </a>
       {/* <a href="/" target="_blank" className="logo">hg</a>  */}

        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navbar">
            <li><a href="#Home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact-us">Contact-us</a></li>
            <li><a href="#L-tour">L-Tour</a></li>
            <li><a href="#help">Help</a></li>
            
            <div className="bx bx-moon" id="darkmode"></div>
        </ul>
    </header>
    </>
  )
}

export default Navbar;