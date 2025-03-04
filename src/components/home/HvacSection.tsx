import { usePageComponentRegistration } from "../../utils/hooks/usePageComponentRegistration.tsx";

import '../../styles/componentStyles/home-styles/landing-content.css';
import '../../styles/componentStyles/home-styles/hvac-section.css';

const SECTION_ID = 'hvac';

export default function HvacSection() {
    usePageComponentRegistration(SECTION_ID);

    return (
        <section id={SECTION_ID}>
            <div className="landing-content hvac-section">

            </div>
        </section>
    );
}