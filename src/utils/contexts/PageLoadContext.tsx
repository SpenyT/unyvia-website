import React, { useContext, createContext, useState } from "react";

export type PageComponentItem = {
    id: string,
    isAsync: boolean,
    isReady: boolean
}

export type PageComponentCount = {
    nRegistered: number,
    nReady: number,
    nAsync: number
}

export type PageLoadContextValue = {
    pageComponents: PageComponentItem[],
    expectedComponentCount: number
    setExpectedPageComponents: (count: number) => void,
    registerPageComponent: (component: PageComponentItem) => void,
    markPageComponentReady: (id:string) => void,
    unregisterPageComponent: (id:string) => void,
    countPageComponents: () => PageComponentCount
    
}

const PageLoadContext = createContext<PageLoadContextValue | undefined>( undefined );
  

export const PageLoadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pageComponents, setPageComponents] = useState<PageComponentItem[]>([]);
    const [expectedComponentCount, setExpectedComponentCount] = useState<number>(0);

    const registerPageComponent = (component: PageComponentItem) => {
        setPageComponents((prev) => [...prev, component]);
    };

    const unregisterPageComponent = (id: string) => {
        setPageComponents((prev) => prev.filter((comp) => comp.id !== id));
    };

    const setExpectedPageComponents = (count : number) => {
        setExpectedComponentCount(count);
    }

    const countPageComponents = () : PageComponentCount => {
        let readyCount = 0,
            asyncCount = 0;

        pageComponents.forEach((component) => {
            if (component.isReady) readyCount++;
            if (component.isAsync) asyncCount++;
        });
        return {
            nRegistered: expectedComponentCount,
            nReady: readyCount,
            nAsync: asyncCount
        }
    };
    
    const markPageComponentReady = (id: string) => {
        setPageComponents((prev) =>
            prev.map((comp) =>
                comp.id === id ? { ...comp, ready: true } : comp
            )
        );
    };

    return (
        <PageLoadContext.Provider value={{ pageComponents, expectedComponentCount, setExpectedPageComponents, registerPageComponent, unregisterPageComponent, markPageComponentReady, countPageComponents }}>
            {children}
        </PageLoadContext.Provider>
    );
};


export const usePageLoadContext = (): PageLoadContextValue => {
    const context = useContext(PageLoadContext);

    if (!context) {
        throw new Error(
            'usePageLoadContext must be used within a <PageLoadProvider>.'
        );
    }
    return context;
};