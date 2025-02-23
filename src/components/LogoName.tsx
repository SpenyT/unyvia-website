import React from "react";

import '../styles/componentStyles/logo-name.css';
// import LogoSphere from '../assets/unyvia-sphere-logo.svg?react';
import LogoSphereFull from '../assets/unyvia-sphere-full.svg?react';
import LogoOuterRing from '../assets/unyvia-outer-ring.svg?react';
import LogoInnerRing from '../assets/unyvia-inner-ring.svg?react';


const LogoName = React.memo(() => {



    return (
        <div className="logo-box">
            <div className="logo-container">
                <LogoSphereFull className="unyvia-sphere" />
                <LogoOuterRing className="logo-outer-ring"/>
                <LogoInnerRing className="logo-inner-ring" />
            </div>
            <h2>UNYVIA</h2>
        </div>
    );
});

export default LogoName;