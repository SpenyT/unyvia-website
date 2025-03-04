import React from 'react';
import { useExpectedPageComponentCount } from '../utils/hooks/usePageComponentRegistration.tsx';

import '../styles/pageStyles/home.css';

import Hero from '../components/home/Hero.tsx';
import SectionDir from '../components/home/SectionDir.tsx';
import LightingSection from '../components/home/LightingSection.tsx';
import AuditsSection from '../components/home/AuditsSection.tsx';
import HvacSection from '../components/home/HvacSection.tsx';
import DecarbSection from '../components/home/DecarbSection.tsx';
import FinanceSection from '../components/home/FinanceSection.tsx';
import NewsletterSection from '../components/home/NewsletterSection.tsx';

// const LightingSection = React.lazy(() => import('../components/home/LightingSection.tsx'));
// const AuditsSection = React.lazy(() => import('../components/home/AuditsSection.tsx'));
// const HvacSection = React.lazy(() => import('../components/home/HvacSection.tsx'));
// const DecarbSection = React.lazy(() => import('../components/home/DecarbSection.tsx'));
// const FinanceSection = React.lazy(() => import('../components/home/FinanceSection.tsx'));
// const NewsletterSection = React.lazy(() => import('../components/home/NewsletterSection.tsx'));

const InitChildren = () => {
    const childrenComponents = [
        <Hero key="heroSection"/>,
        <SectionDir key="sectionDir"/>,
        <LightingSection key="lightingSection"/>,
        <AuditsSection key="auditsSection"/>,
        <HvacSection key="hvacSection"/>,
        <DecarbSection key="decarbSection"/>,
        <FinanceSection key="financeSection"/>,
        <NewsletterSection key="newsletterSection"/>
    ];
    useExpectedPageComponentCount(childrenComponents.length);
    return childrenComponents;
}

function Home() {

    // useEffect(() => {
    //     import('../components/home/SectionDir.tsx');
    //     import('../components/home/LightingSection.tsx');
    //     import('../components/home/AuditsSection.tsx');
    //     import('../components/home/HvacSection.tsx');
    //     import('../components/home/DecarbSection.tsx');
    //     import('../components/home/FinanceSection.tsx');
    //     import('../components/home/NewsletterSection.tsx');
    // }, []);

    

    return (
        <div className="home">
            {InitChildren()}
        </div>
    );
}

export default React.memo(Home);