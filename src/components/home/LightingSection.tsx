import { usePageComponentRegistration } from "../../utils/hooks/usePageComponentRegistration.tsx";

import '../../styles/componentStyles/home-styles/landing-content.css';
import '../../styles/componentStyles/home-styles/lighting-section.css';

const SECTION_ID = 'lighting';

export default function LightingSection() {
    usePageComponentRegistration(SECTION_ID);

    return (
        <section id={SECTION_ID}>
            <div className="landing-content lighting-section">

            </div>
        </section>
    );
}