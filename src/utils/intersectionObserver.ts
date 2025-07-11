import { useState, useEffect, useRef, useCallback } from 'react';

export interface UseIntersectionObserverOptions {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
    freezeOnceVisible?: boolean;
    initialIsIntersecting?: boolean;
}

export interface UseIntersectionObserverReturn {
    ref: (node: Element | null) => void;
    entry: IntersectionObserverEntry | undefined;
    isIntersecting: boolean;
    isFullyVisible: boolean;
    intersectionRatio: number;
}

export const useIntersectionObserver = ( options: UseInterseconObserverOptions = {} ): UseIntersectionObserverReturn => {
    const {
        root = null,
        rootMargin = '0px',
        threshold = 0,
        freezeOnceVisible = false,
        initialIsIntersecting = false
    } = options;

    const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>();
    const [isIntersecting, setIsIntersecting] = useState<boolean>(initialIsIntersecting);
    const [isFullyVisible, setIsFullyVisible] = useState<boolean>(false);
    const [intersectionRatio, setIntersectionRatio] = useState<number>(0);

    const elementRef = useRef<Element | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);
    const frozen = useRef<boolean>(false);

    const cleanupObserver = useCallback((): void => {
        if (observer.current) {
            observer.current.disconnect();
            observer.current = null;
        }
    }, []);

  const ref = useCallback((node: Element | null): void => {
    cleanupObserver();

    if (node) {
        elementRef.current = node;

        if (frozen.current) {
            return;
        }

        if (!('IntersectionObserver' in window)) {
            console.warn('IntersectionObserver is not supported in this browser');
            return;
        }

        observer.current = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
            const [observerEntry] = entries;
            
            setEntry(observerEntry);
            setIsIntersecting(observerEntry.isIntersecting);
            setIsFullyVisible(observerEntry.intersectionRatio >= 1);
            setIntersectionRatio(observerEntry.intersectionRatio);

            if (freezeOnceVisible && observerEntry.isIntersecting) {
                frozen.current = true;
                cleanupObserver();
            }
        },
        {
            root,
            rootMargin,
            threshold
        });

        observer.current.observe(node);
    } else {
        elementRef.current = null;
        setEntry(undefined);
        setIsIntersecting(initialIsIntersecting);
        setIsFullyVisible(false);
        setIntersectionRatio(0);
    }
    }, [root, rootMargin, threshold, freezeOnceVisible, initialIsIntersecting, cleanupObserver]);

        useEffect(() => {
            return (): void => {
                cleanupObserver();
            };
        }, [cleanupObserver]);

    useEffect(() => {
        if (!freezeOnceVisible) {
            frozen.current = false;
        }
    }, [freezeOnceVisible]);

    return {
        ref,
        entry,
        isIntersecting,
        isFullyVisible,
        intersectionRatio
    };
};

export default useIntersectionObserver;