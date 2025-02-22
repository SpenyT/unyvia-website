import React from "react";

import '../styles/componentStyles/logo-name.css';
// import LogoSphere from '../assets/unyvia-sphere-logo.svg?react';
import LogoSphereFull from '../assets/unyvia-sphere-full.svg?react';
import LogoRing from '../assets/unyvia-ring.svg?react';


const LogoName = React.memo(() => {



    return (
        <div className="logo-box">
            <div className="logo-container">
                <LogoSphereFull className="unyvia-sphere" />
                <LogoRing className="unyvia-ring" />
            </div>
            <h3>UNYVIA</h3>
        </div>
    );
});

export default LogoName;