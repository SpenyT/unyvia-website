import { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoName from './LogoName';
import DropDownSvg from "../assets/dropdown-arrow.svg?react";

import '../styles/componentStyles/navbar.css';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [hamburgerClicked, setHamburgerClicked] = useState<boolean>(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
        setHamburgerClicked(true);
        // console.log(menuOpen)
    }


    return (
        <header className="navbar">
            <nav className="navbar-container">
                <Link to="/">
                    <div className="logo"><LogoName /></div>
                </Link>
                <div className={menuOpen ? "navbar-buttons-open" : hamburgerClicked ? "navbar-buttons-closed" :  "navbar-buttons" }>

                    <button className="navbar-button navbar-dropdown-button">
                        Services
                        <DropDownSvg className="dropdown-menu-svg"/>
                    </button>
                    <Link to="/lighting"><button className="navbar-button">Lighting</button></Link>
                    <Link to="/hvac"><button className="navbar-button">Hvac</button></Link>
                    <Link to="/about-us"><button className="navbar-button">About Us</button></Link>
                </div>
                <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}> 
                     <span className="bar top"></span>
                     <span className="bar middle"></span>
                     <span className="bar bottom"></span>
                </div>
            </nav>
        </header>
    );
}