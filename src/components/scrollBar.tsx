import React, { useState, useEffect, useRef } from 'react';

import { PageComponentItem, usePageLoadContext } from '../utils/contexts/PageLoadContext.tsx';
import ScrollHandle from './subComponents/ScrollHandle.tsx';
import ScrollbarSection from './subComponents/ScrollbarSections.tsx'

import '../styles/componentStyles/scrollbar.css';



interface ScrollSection {
    id: string,
    label: string,
    info: string
}

export default function Scrollbar() {
    const { pageComponents, expectedComponentCount } = usePageLoadContext();
    const [documentHeight, setDocumentHeight] = useState<number>(0);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const scrollbarRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const body = document.body,
              html = document.documentElement;
        const documentHeightCalc = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, 
                                        html.scrollHeight,  html.offsetHeight );
        setDocumentHeight(documentHeightCalc);

        const allReady = pageComponents.length >= expectedComponentCount
                            && pageComponents.every(comp => comp.isReady);
        setIsLoaded(allReady);
    }, [pageComponents, expectedComponentCount, documentHeight]);


    return (
        <div id="scrollbar-container" className="scrollbar-container">

            {isLoaded && 
                <div id="scrollbar" className="scrollbar" ref={scrollbarRef}>
                    <ScrollHandle documentHeight={documentHeight} scrollbarRef={scrollbarRef as React.RefObject<HTMLDivElement>}/>
                    {pageComponents.map((section, idx) => (
                        <ScrollbarSection key={`scrollbar-section-${idx}`} sectionInfo={section}/>
                    ))}
                </div>
            }
        </div>
    );
}