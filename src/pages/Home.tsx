import React, { useEffect, Suspense } from 'react';
import '../styles/pageStyles/home.css';

import Hero from '../components/home/Hero.tsx';
import SectionDir from '../components/home/SectionDir.tsx';

const LightingSection = React.lazy(() => import('../components/home/LightingSection.tsx'));
const AuditsSection = React.lazy(() => import('../components/home/AuditsSection.tsx'));
const HvacSection = React.lazy(() => import('../components/home/HvacSection.tsx'));
const DecarbSection = React.lazy(() => import('../components/home/DecarbSection.tsx'));
const FinanceSection = React.lazy(() => import('../components/home/FinanceSection.tsx'));
const NewsletterSection = React.lazy(() => import('../components/home/NewsletterSection.tsx'));


export default function Home() {

    useEffect(() => {
        import('../components/home/SectionDir.tsx');
        import('../components/home/LightingSection.tsx');
        import('../components/home/AuditsSection.tsx');
        import('../components/home/HvacSection.tsx');
        import('../components/home/DecarbSection.tsx');
        import('../components/home/FinanceSection.tsx');
        import('../components/home/NewsletterSection.tsx');
    }, []);

    return (
        <div className="home">
            <Hero/>
            <SectionDir />
            <Suspense fallback="<div>loading</div>">
                <LightingSection />
                <AuditsSection />
                <HvacSection />
                <DecarbSection />
                <FinanceSection />
                <NewsletterSection />
            </Suspense>
        </div>
    );
}