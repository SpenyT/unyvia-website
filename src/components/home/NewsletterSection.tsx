import { usePageComponentRegistration } from "../../utils/hooks/usePageComponentRegistration.tsx";

import '../../styles/componentStyles/home-styles/landing-content.css';
import '../../styles/componentStyles/home-styles/newsletter-section.css';

const SECTION_ID = 'newsletter';

export default function NewsletterSection() {
    usePageComponentRegistration(SECTION_ID);

    return (
        <section id={SECTION_ID}>
            <div className="landing-content">
            
            </div>
        </section>
    );
}