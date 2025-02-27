import { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoName from './LogoName';
import DropDownSvg from "../assets/dropdown-arrow.svg?react";

import '../styles/componentStyles/navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [hamburgerClicked, setHamburgerClicked] = useState<boolean>(false);

    const [servicesOpen, setServicesOpen] = useState<boolean>(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
        setHamburgerClicked(true);
    }

    const servicesToggleClick = () =>{
        setServicesOpen(!servicesOpen);
    }


    return (
        <header className="navbar">
            <nav className="navbar-container">
                <div className="logo"><LogoName /></div>
                <div className={menuOpen ? "navbar-buttons-open" : hamburgerClicked ? "navbar-buttons-closed" :  "navbar-buttons" }>

                    <Link className="takeme-button-container-small" to="/">
                        <div className="takeme-button">Take Me</div>
                    </Link>

                    <div className="navbar-button navbar-dropdown-button" onClick={servicesToggleClick}>
                        Services
                        <DropDownSvg className="dropdown-menu-svg"/>
                    </div>
                  
                    <Link className="navbar-button" to="/lighting">Lighting</Link>
                    <Link className="navbar-button" to="/hvac">Hvac</Link>
                    <Link className="navbar-button" to="/about-us">About Us</Link>
                    
     
                    <Link className="navbar-button" to="/lighting">Lighting</Link>
                    <Link className="navbar-button" to="/hvac">Hvac</Link>
                    <Link className="navbar-button" to="/about-us">About Us</Link>

                </div>
                <Link className="takeme-button-container" to="/">
                        <div className="takeme-button">Take Me</div>
                    </Link>
              
                <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}> 
                     <span className="bar top"></span>
                     <span className="bar middle"></span>
                     <span className="bar bottom"></span>
                </div>
                <Link className="takeme-button-container" to="/">
                    <div className="takeme-button">Take Me</div>
                </Link>

            </nav>
        </header>
    );
}