import { usePageComponentRegistration } from "../../utils/hooks/usePageComponentRegistration.tsx";

import '../../styles/componentStyles/home-styles/landing-content.css';
import '../../styles/componentStyles/home-styles/audits-section.css';

const SECTION_ID = 'audits';

export default function AuditsSection() {
    usePageComponentRegistration(SECTION_ID);

    return (
        <section id={SECTION_ID}>
            <div className="landing-content audits-section">

            </div>
        </section>
    );
}