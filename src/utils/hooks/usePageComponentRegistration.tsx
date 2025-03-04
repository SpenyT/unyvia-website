import { useEffect } from 'react';
import { PageComponentItem, usePageLoadContext } from '../contexts/PageLoadContext';

export const usePageComponentRegistration = (id: string) => {
    const { registerPageComponent, unregisterPageComponent } = usePageLoadContext();

    useEffect(() => {
        const component: PageComponentItem = { id, isReady: true, isAsync:false };
        registerPageComponent(component);
        console.log("mounted: ", id)

        return () => { 
            console.log("demounted: ", id);
            unregisterPageComponent(id); 
        };
    }, [id]);
};

export const useExpectedPageComponentCount = (nExpectedComponents : number) => {
    const { setExpectedPageComponents } = usePageLoadContext();

    useEffect(() => {
        setExpectedPageComponents(nExpectedComponents);

        console.log("Page Mount: ", nExpectedComponents)

        return () => { setExpectedPageComponents(0); };
    }, [nExpectedComponents]);
};