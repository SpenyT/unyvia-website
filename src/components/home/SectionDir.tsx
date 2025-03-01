import React, {useState, useRef, useCallback} from "react";
import { useInView } from 'react-intersection-observer';


import '../../styles/componentStyles/section-dir.css';

import Segment from '../../assets/spinning-segment.svg?react'
import LightingIcon from '../../assets/lighting-icon.svg?react'

interface ISegment {
    name: string,
    icon: React.ElementType
}
const segments: Array<ISegment> = [
    { name: "lighting", icon: LightingIcon },
    { name: "audits", icon: LightingIcon },
    { name: "hvac", icon: LightingIcon },
    { name: "decarb", icon: LightingIcon },
    { name: "finance", icon: LightingIcon }
];

const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
};

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

type CardProps = {
    name:string,
    header:string,
    content:string,
    IsActive:boolean
}

const FullSegment = React.memo(({ name, icon:Icon, SetMouseHover}: FullSegmentProps) => {
    return (
        <div key={`${name}-segment`} className={`segment segment-${name}`}  
            onClick= {() => handleScrollToSection(name)}
            onMouseEnter={() => SetMouseHover(name)}
            onMouseLeave={() => SetMouseHover(null)}>
                <Segment />
                <Icon className="icon"/>
        </div>
    );
});

const ReflectedSegment = React.memo(({ name, icon:Icon, isHovered:IsHovered } : ReflectedSegmentProps) => {
    return(
        <div className={`segment segment-${name} reflection`} data-hovered={IsHovered}>
            <Segment />
            <Icon className="icon"/>
        </div>
    );
});

const ToolTipCard = React.memo(({name, header, content, IsActive}: CardProps ) => {
    return (
        <div className={`${name}-card card`} hidden={!IsActive}>
            <h3>{header}</h3>
            <p>{content}</p>
        </div>
    );
});

export default function SectonDir() {
    const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

    const SetMouseHover = (segmentName?: string | null) => {
        setHoveredSegment(segmentName ?? null);
    };

    return (
        <div className="section-dir">
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
        </div>
    );
}

