import { usePageComponentRegistration } from "../../utils/hooks/usePageComponentRegistration.tsx";

import '../../styles/componentStyles/home-styles/hero.css';

const SECTION_ID = 'hero';

export default function Hero() {
    usePageComponentRegistration(SECTION_ID);

    return (
        <section id={SECTION_ID}>
            <div className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}