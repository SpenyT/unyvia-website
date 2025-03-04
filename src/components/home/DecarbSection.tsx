import { usePageComponentRegistration } from "../../utils/hooks/usePageComponentRegistration.tsx";

import '../../styles/componentStyles/home-styles/landing-content.css';
import '../../styles/componentStyles/home-styles/decarb-section.css';

const SECTION_ID = 'decarb';

export default function DecarbSection() {
    usePageComponentRegistration(SECTION_ID);

    return (
        <section id={SECTION_ID}>
            <div className="landing-content decarb-section">

            </div>
        </section>
    );
}