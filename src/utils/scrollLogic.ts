import {  } from "react";

export const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
};

type scrollbarSectionPos = {
    height: number,
    offset: number,
}

export const handleScrollbarSectionHeight = (documentHeight: number, scrollbarHeight: number, sectionDiv: HTMLDivElement) : scrollbarSectionPos => {
    
    const sectionRect = sectionDiv.getBoundingClientRect();
    const ratio = (sectionRect.bottom - sectionRect.top) / documentHeight;
    const sectionHeight = scrollbarHeight * ratio;
    
    
    return {height: sectionHeight, offset: 0};
};