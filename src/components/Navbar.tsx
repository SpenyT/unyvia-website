import { Link } from 'react-router-dom';

import LogoName from './LogoName';

import '../styles/componentStyles/navbar.css';
import {  useState } from 'react';


// const ProductLinks = () => {
//     return (
//         <>
//             <Link to="/lighting"><button className="navbar-button">Lighting</button></Link>
//             <Link to="/hvac"><button className="navbar-button">Hvac</button></Link>
//         </>
//     )
// };




export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [hamburgerClicked, setHamburgerClicked] = useState<boolean>(false);
        
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
        setHamburgerClicked(true)
        // console.log(menuOpen)
    }
    return (
        <header className="navbar">
            <nav className="navbar-container">
                <Link to="/">
                    <div className="logo"><LogoName /></div>
                </Link>
                <div className={menuOpen ? "navbar-buttons-open" : hamburgerClicked ? "navbar-buttons-closed" :  "navbar-buttons" }>

                    <Link to="/"><button className="navbar-button">Home</button></Link>
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