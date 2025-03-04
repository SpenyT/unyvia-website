import React from 'react';
import LogoName from './LogoName';


import '../styles/componentStyles/footer.css';


function Footer() {

    return (
        <footer className="footer">
            <nav>
                <div className="footer-content">
                    
                </div>
                <div className="footer-footer">
                    <LogoName />
                    <div className="socials-container">
                    
                    </div>
                </div>
            </nav>
        </footer>
    );
}

export default React.memo(Footer);