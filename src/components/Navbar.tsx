import { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentStyles/navbar.css';

export default function Navbar() {
    const [scrollYPosition, setScrollYPosition] = useState(0);
    const navRef = useRef(null);

    return (
        <div className="navbar" ref={navRef}>
            <Link to="/">
                <div className="navbar-logo">
                    <img src="/" />
                    <h2>UNYVIA</h2>
                </div>
            </Link>
            <div className="navbar-buttons">
                <Link to="/"><button className="navbar-button">Home</button></Link>
                <Link to="/lighting"><button className="navbar-button">Lighting</button></Link>
                <Link to="/hvac"><button className="navbar-button">Hvac</button></Link>
                <Link to="/about-us"><button className="navbar-button">About Us</button></Link>
            </div>
        </div>
    );
}