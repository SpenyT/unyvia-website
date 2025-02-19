import Hero from '../components/Hero.tsx';
import LightingSection from '../components/LightingSection.tsx';
import HvacSection from '../components/HvacSection.tsx';
import Footer from '../components/Footer.tsx';


import '../styles/pageStyles/home.css';

export default function Home() {

    return (
        <div className="home">
            <Hero />
            <LightingSection />
            <HvacSection />
            <Footer />
        </div>
    );
}