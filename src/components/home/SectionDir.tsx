import React, { useState } from "react";

import '../../styles/componentStyles/home-styles/section-dir.css';

import Segment from '../../assets/spinning-segment.svg?react';
import SegmentBubble from '../../assets/sections-assets/segment-bubble.svg?react';
import LightingIcon from '../../assets/sections-assets/lighting-icon.svg?react';
import AuditsIcon from '../../assets/sections-assets/audits-icon.svg?react';
import HvacIcon from '../../assets/sections-assets/hvac-icon.svg?react';
import DecarbIcon from '../../assets/sections-assets/decarb-icon.svg?react';
import FinanceIcon from '../../assets/sections-assets/finance-icon.svg?react';

import { handleScrollToSection } from "../../utils/scrollLogic.ts";
import { usePageComponentRegistration } from "../../utils/hooks/usePageComponentRegistration.tsx";

const SECTION_ID = 'sectionDir';

interface ISegment {
    name: string,
    icon: React.ElementType
}
const segments: Array<ISegment> = [
    { name: "lighting", icon: LightingIcon },
    { name: "audits", icon: AuditsIcon },
    { name: "hvac", icon: HvacIcon },
    { name: "decarb", icon: DecarbIcon },
    { name: "finance", icon: FinanceIcon }
];



type FullSegmentProps = {
    name:string,
    icon: React.ElementType,
    SetMouseHover: (segmentName?: string | null) => void,
}

type ReflectedSegmentProps = {
    name:string,
    icon: React.ElementType,
    isHovered: boolean
}

// type CardProps = {
//     name:string,
//     header:string,
//     content:string,
//     IsActive:boolean
// }

const FullSegment = React.memo(({ name, icon:Icon, SetMouseHover}: FullSegmentProps) => {
    return (
        <div key={`${name}-segment`} className={`segment segment-${name}`}  
            onClick= {() => handleScrollToSection(name)}
            onMouseEnter={() => SetMouseHover(name)}
            onMouseLeave={() => SetMouseHover(null)}>
                <Segment />
                <div className="icon">
                    <SegmentBubble />
                    <Icon className="section-icon"/>
                </div>
        </div>
    );
});

const ReflectedSegment = React.memo(({ name, icon:Icon, isHovered:IsHovered } : ReflectedSegmentProps) => {
    return(
        <div className={`segment segment-${name} reflection`} data-hovered={IsHovered}>
            <Segment />
            <div className="icon">
                <SegmentBubble />
                <Icon className="section-icon"/>
            </div>
        </div>
    );
});

// const ToolTipCard = React.memo(({name, header, content, IsActive}: CardProps ) => {
//     return (
//         <div className={`${name}-card card`} hidden={!IsActive}>
//             <h3>{header}</h3>
//             <p>{content}</p>
//         </div>
//     );
// });

function SectonDir() {
    usePageComponentRegistration(SECTION_ID);
    const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

    const SetMouseHover = (segmentName?: string | null) => {
        setHoveredSegment(segmentName ?? null);
    };

    return (
        <section id={SECTION_ID} className="section-dir">
            <div className="segment-container">
                <div className="main-spin">
                    {segments.map((segment) => (
                        <FullSegment key={`${segment.name}-segment`} name={segment.name} icon={segment.icon} SetMouseHover={SetMouseHover}/>
                    ))}
                </div>
            </div>
            {/* <div className="hover-card-container">
                {segments.map((segment) => (
                    <ToolTipCard key={`${segment.name}-card`} name={segment.name} header={segment.name} content={segment.name + " description"} IsActive={segment.name === hoveredSegment}/>
                ))}
            </div> */}
            <div className="spin-container-reflection">
                <div className="mask-gradient"/>
                <div className="reflection-wrapper">
                    <div className="main-spin-reflection">
                        {segments.map((segment) => (
                            <ReflectedSegment key={`${segment.name}-reflection`} name={segment.name} icon={segment.icon} isHovered={segment.name === hoveredSegment}/>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default React.memo(SectonDir);

