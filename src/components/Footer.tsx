import LogoName from './LogoName';


import '../styles/componentStyles/footer.css';


export default function Footer() {

    return (
        <footer>
            <nav className="footer">
                <div className="footer-content">
                    <div className="footer-item">
                            <div className="footer-item-list-container">
                                <div className="footer-item-title">Services</div>
                                    <ul className="footer-item-list">
                                        <li>HVAC</li>
                                        <li>Lighting</li>
                                        <li>Energy Audits</li>
                                        <li>Decarbonization</li>
                                        <li>EaaS</li>
                                        <li>Solar</li>
                                    </ul>
                            </div>
                    </div>
                     <div className="footer-item">
                            <div className="footer-item-list-container">
                                <div className="footer-item-title">About Us</div>
                                <ul className="footer-item-list">
                                    <li>FAQ</li>
                                    <li>Our Mission</li>
                                </ul>
                            </div>
                    </div>
                     <div className="footer-item">
                            <div className="footer-item-list-container">
                                <div className="footer-item-title">Socials</div>
                                <ul className="footer-item-list">
                                    <li>Instagram</li>
                                    <li>Facebook</li>
                                     <li>LinkedIn</li>
                                    
                                  
                                   
                                </ul>
                            </div>
                    </div>
                     <div className="footer-item">
                            <div className="footer-item-list-container">
                                <div className="footer-item-title">Contact Us</div>
                                
                            </div>
                    </div>
                    
                </div>
                <div className="footer-footer">
                    <LogoName />
                </div>
            </nav>
        </footer>
    );
}