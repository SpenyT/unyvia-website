import { Link } from 'react-router-dom';

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
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">
                    <div className="navbar-logo">
                        {/* <img src="/" /> */}
                        <div className='test-img-placeholder'/>
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
        </nav>
    );
}