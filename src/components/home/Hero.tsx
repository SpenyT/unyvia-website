import React from 'react';

import "../../styles/componentStyles/hero.css"

import GetStartedButton from '../subComponents/GetStartedButton.tsx';

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero-content-wrapper'>
                <span id='hero-title'>Unyvia Tagline And Effective words</span>
                <span id='hero-statement' className="hero-text">
                    Mission Statement and a description of things. 
                    filler words here currently filling words so 
                    it looks like there is stuff here. Lots of good 
                    info here  etc.
                </span>
                <span id='hero-benefits'>Benefit list perhaps?</span>
                <ul id='hero-benefits-list' className="hero-text">
                    <li>bennefit 1</li>
                    <li>bennefit 2</li>
                    <li>bennefit 3</li>
                </ul>
                <nav>
                    <div className="hero-buttons-wrapper">
                        <GetStartedButton/>
                    </div>
                </nav>
            </div>
        </div>
    );
}