import { RefObject } from "react";

import "../../styles/componentStyles/hero.css";



interface HeroProps {
    heroRef: RefObject<HTMLDivElement | null>;
}

export default function Hero({heroRef} : HeroProps) {
    
    
    return (
        <section className="hero" ref={heroRef}>

        </section>
    );
}