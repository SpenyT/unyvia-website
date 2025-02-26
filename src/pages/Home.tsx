import Hero from '../components/Hero.tsx';
import LightingSection from '../components/LightingSection.tsx';
import HvacSection from '../components/HvacSection.tsx';
import SectonDir from '../components/SectionDir.tsx';

import '../styles/pageStyles/home.css';

export default function Home() {

    return (
        <div className="home">
            <Hero />
            <div className="smooth-gradient">
                <div className="background-gradient"/>
                <div className="background-gradient-transparent"/>
            </div>
            <div className="content">
                <SectonDir />
                <HvacSection />
                <LightingSection />
            </div>
        </div>
    );
}