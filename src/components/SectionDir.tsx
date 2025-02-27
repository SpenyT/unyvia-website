import '../styles/componentStyles/section-dir.css';

import Segment from '../assets/spinning-segment.svg?react'
import LightingIcon from '../assets/lighting-icon.svg?react'

export default function SectonDir() {

    

    return (
        <div className="sections-dir">
            <div className="segment-container">
                <div className="main-spin">
                    <div className="segment" id="segment-lighting" onClick={() => {}}>
                        <Segment />
                        <LightingIcon className="icon"/>
                    </div>
                    <div className="segment" id="segment-audits">
                        <Segment />
                        <LightingIcon className="icon"/>
                    </div>
                    <div className="segment" id="segment-hvac">
                        <Segment />
                        <LightingIcon className="icon"/>
                    </div>
                    <div className="segment" id="segment-decarb">
                        <Segment />
                        <LightingIcon className="icon"/>
                    </div>
                    <div className="segment" id="segment-finance">
                        <Segment />
                        <LightingIcon className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

