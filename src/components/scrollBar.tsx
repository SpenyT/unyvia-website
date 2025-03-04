import '../styles/componentStyles/scrollbar.css';
import React, { useState, useEffect, useRef } from 'react';
import {motion} from 'motion/react';

import { usePageLoadContext } from '../utils/contexts/PageLoadContext.tsx';
import {handleScrollToSection} from "../utils/scrollLogic.ts";

const handleScrollbarSectionSize = (sectionId: string) => {
    const GAPSIZE = 1;

    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                            html.clientHeight, html.scrollHeight, html.offsetHeight );

    const SCROLLBAR_HEIGHT = documentHeight * 0.95;
    
    let sectionHeight = document.getElementById(sectionId)?.scrollHeight;
    if(!sectionHeight || sectionHeight === 0)
        throw new Error("Section DNE");
    
    sectionHeight -= GAPSIZE;
    return Math.round((sectionHeight/documentHeight) * SCROLLBAR_HEIGHT);
}

const getScrollThumbHeight = () => {
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                            html.clientHeight, html.scrollHeight, html.offsetHeight );
    const scrollbarThumbHeight =  (window.innerHeight*window.innerHeight*0.95/documentHeight);
    return scrollbarThumbHeight;
};

interface ScrollSection {
    id: string,
    label: string,
    info: string
}

type scrollbarSectionProps = {
    sectionInfo: ScrollSection,
    isBarHovered: boolean
}

const scrollSections: ScrollSection[] = [{id:"hero", label:"Hero Section", info:"Hero Section"},
                                        {id:"sectionDir", label:"Section Directory", info:"Section Directory"},
                                        {id:"lighting", label:"Hvac Section", info:"Hvac Section"},
                                        {id:"audits", label:"Hvac Section", info:"Hvac Section"},
                                        {id:"hvac", label:"Hvac Section", info:"Hvac Section"},
                                        {id:"decarb", label:"Hvac Section", info:"Hvac Section"},
                                        {id:"finance", label:"Hvac Section", info:"Hvac Section"}];

const ScrollBarSection = React.memo(({sectionInfo, isBarHovered}: scrollbarSectionProps) => {


    return(
        <motion.div id={`scrollbar-${sectionInfo.id}`} className={`scrollbar-section ${isBarHovered ? "current-section" : ""}`} style={{height: `${handleScrollbarSectionSize(sectionInfo.id)}px`}}
            onClick={() => handleScrollToSection(sectionInfo.id)}> {/*Could use some optimization*/}
        </motion.div>
    );
});

function ScrollBar() {
    const { pageComponents, expectedComponentCount } = usePageLoadContext();
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const constraintsRef = useRef<HTMLDivElement | null>(null)

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        const allReady =
            pageComponents.length >= expectedComponentCount &&
            pageComponents.every(comp => comp.isReady);
          setIsLoaded(allReady);
      }, [pageComponents, expectedComponentCount]);

    //event:MouseEvent, info:PanInfo
    function onDrag() {
        
    }

    //onscroll scrollthumb position
    useEffect(() => {

    }, []);

    return (
        <div id="scrollbar-container" className="scrollbar-container"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>

            {isLoaded && <div id="scrollbar" className={`scrollbar ${isHovered ? "focused" : "unfocus"}`} ref={constraintsRef}>
                <motion.div className="scroll-handle" drag="y" dragConstraints={constraintsRef} style={{height:getScrollThumbHeight()}}
                    onDrag={onDrag}>
                </motion.div>
                {scrollSections.map((section, idx) => (
                    <ScrollBarSection key={`scrollbar-section-${idx}`} sectionInfo={section} isBarHovered={isHovered}/>
                ))}
            </div>}
        </div>
    );
}

export default React.memo(ScrollBar);