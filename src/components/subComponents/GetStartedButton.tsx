import React from 'react';
import { Link } from "react-router";

import "../../styles/componentStyles/GetStartedButton.css";

export default function GetStartedButton() {
    return (
        <Link to="/get-started">
            <div className='get-started-btn'>
                Get Started
            </div>
        </Link>
    )
}