import { useState, useEffect, useCallback } from 'react';
import {motion, PanInfo } from 'motion/react';

type ScrollHandleProps = {
    documentHeight: number,
    scrollbarRef: React.RefObject<HTMLDivElement>
}

function ScrollHandle({documentHeight, scrollbarRef } : ScrollHandleProps) {
    const [handleHeight, setHandleHeight] = useState<number>(0);
    const [handleOffset, setHandleOffset] = useState<number>(0);


    useEffect(() => {
        if(!scrollbarRef.current) return;

        const trackHeight = scrollbarRef.current.getBoundingClientRect().height;
        const ratio = window.innerHeight / documentHeight;
        setHandleHeight(trackHeight * ratio);

        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const maxScroll = documentHeight - window.innerHeight;
            const scrollRatio = maxScroll > 0 ? scrollTop / maxScroll : 0;
            setHandleOffset(scrollRatio * (trackHeight - handleHeight));
        };

        window.addEventListener('onScroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [documentHeight, handleHeight]);

    const handleDrag = useCallback((_event: MouseEvent | TouchEvent, info: PanInfo) => {
        if (!scrollbarRef.current) return;
        const trackHeight = scrollbarRef.current.getBoundingClientRect().height;
        const maxOffset = trackHeight - handleOffset;
        const nextOffset = Math.max(0, Math.min(handleOffset + info.delta.y, maxOffset));
        setHandleOffset(nextOffset);
    
        const scrollRatio = nextOffset / maxOffset;
        const maxScroll = documentHeight - window.innerHeight;
        window.scrollTo(0, scrollRatio * maxScroll);
    }, [documentHeight, handleHeight, handleOffset] );


    return (
        <motion.div className="scroll-handle" drag="y" 
            dragConstraints={scrollbarRef}
            dragMomentum={false}
            style={{ height: `${handleHeight}px`, top: handleOffset, position: 'absolute' }} 
            onDrag={handleDrag}/>
    );
}

export default ScrollHandle;