import React, { useRef, useEffect, useState } from 'react';
import { handleScrollToSection, handleScrollbarSectionHeight } from "../../utils/scrollLogic.ts";
import { PageComponentItem } from '../../utils/contexts/PageLoadContext.tsx';

type scrollbarSectionProps = {
    sectionInfo: PageComponentItem,
    documentHeight: number
    scrollbarRef: React.RefObject<HTMLDivElement>,
}




const ScrollbarSection = React.memo(({sectionInfo, documentHeight, scrollbarRef}: scrollbarSectionProps) => {
    const currentSectionRef = useRef<HTMLDivElement>(null);
    const [sectionHeight, setSectionHeight] = useState<number>(0);
    const [sectionOffset, setSectionOffset] = useState<number>(0);
    
    useEffect(() => {
        const {}
    }, [documentHeight]);


    return(
        <div id={`scrollbar-${sectionInfo.id}`} className="scrollbar-section" ref={currentSectionRef} style={{height: `${handleScrollbarSectionHeight(documentHeight, scrollbarRef.current)}px`}}
            onClick={() => handleScrollToSection(sectionInfo.id)}>
        </div>
    );
});

export default ScrollbarSection;