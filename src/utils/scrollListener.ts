import { useState, useEffect, useRef } from 'react';

export type ScrollDirection = 'up' | 'down' | null;

export interface UseScrollDirectionOptions {
    threshold?: number;
    element?: HTMLElement | Window | null;
    debounceMs?: number;
}


export interface UseScrollDirectionReturn {
    scrollDirection: ScrollDirection;
    scrollY: number;
    isScrolling: boolean;
}


export const useScrollDirection = ( options: UseScrollDirectionOptions = {} ): UseScrollDirectionReturn => {
    const {
        threshold = 10,
        element = null,
        debounceMs = 0
    } = options;

    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
    const [scrollY, setScrollY] = useState<number>(0);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    const lastScrollY = useRef<number>(0);
    const debounceTimer = useRef<number | null>(null);
    const scrollTimer = useRef<number | null>(null);

    useEffect(() => {
        const targetElement = element || window;
        
        const getScrollY = (): number => {
            if (targetElement === window)
                return window.pageYOffset || document.documentElement.scrollTop;

            return (targetElement as HTMLElement).scrollTop;
        };

        const handleScroll = (): void => {
            const currentScrollY = getScrollY();
            setScrollY(currentScrollY);
            setIsScrolling(true);

            if (scrollTimer.current)
                clearTimeout(scrollTimer.current);

            scrollTimer.current = setTimeout(() => {
                setIsScrolling(false);
            }, 150);

            const updateDirection = (): void => {
                const difference = Math.abs(currentScrollY - lastScrollY.current);

                if (difference >= threshold) {
                    const direction: ScrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
                    setScrollDirection(direction);
                    lastScrollY.current = currentScrollY;
                }
            };

            if (debounceMs > 0) {
                if (debounceTimer.current)
                    clearTimeout(debounceTimer.current);

                debounceTimer.current = setTimeout(updateDirection, debounceMs);
            } else {
                updateDirection();
            }
        };

        const initialScrollY = getScrollY();
        setScrollY(initialScrollY);
        lastScrollY.current = initialScrollY;

        targetElement.addEventListener('scroll', handleScroll, { passive: true });

        return (): void => {
            targetElement.removeEventListener('scroll', handleScroll);
        
            if (debounceTimer.current)
                clearTimeout(debounceTimer.current);
            
            if (scrollTimer.current)
                clearTimeout(scrollTimer.current);
        };
    }, [element, threshold, debounceMs]);

    return {
        scrollDirection,
        scrollY,
        isScrolling
    };
};

export default useScrollDirection;