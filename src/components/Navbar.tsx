import { Link } from 'react-router-dom';
import LogoName from './LogoName';

import '../styles/componentStyles/navbar.css';


// const ProductLinks = () => {
//     return (
//         <>
//             <Link to="/lighting"><button className="navbar-button">Lighting</button></Link>
//             <Link to="/hvac"><button className="navbar-button">Hvac</button></Link>
//         </>
//     )
// };



export default function Navbar() {

    return (
        <header className="navbar">
        <input type="checkbox" className="check" id="checked"/>
        <label className="menu-btn" htmlFor="checked">
            <span className="bar top"></span>
            <span className="bar middle"></span>
            <span className="bar bottom"></span>
            <span className="menu-btn__text"></span>
        </label>
        <label className="close-menu" htmlFor="checked"></label>
            <nav className="navbar-container">
                <div className='logo'>
                    <Link to="/">
                        <LogoName />
                    </Link>
                </div>
               
                <div className="navbar-buttons">
                    <Link to="/"><button className="navbar-button">Home</button></Link>
                    <Link to="/lighting"><button className="navbar-button">Lighting</button></Link>
                    <Link to="/hvac"><button className="navbar-button">Hvac</button></Link>
                    <Link to="/about-us"><button className="navbar-button">About Us</button></Link>
                </div>

                

                
              
            </nav>
        </header>
    );
}