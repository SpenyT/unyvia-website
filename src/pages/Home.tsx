import { useEffect, useRef } from "react";

import Testimonials from '../components/home/Testimonials';
import Services from '../components/home/Services';
import Hero from '../components/home/Hero';
import CTA from '../components/home/CTA';
import useScrollDirection from "../utils/scrollListener.ts";

import '../styles/pageStyles/home/home.css';
import useIntersectionObserver from "../utils/intersectionObserver.ts";

export default function Home() {

    const heroRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const { scrollDirection, isScrolling } = useScrollDirection({
        threshold: 0,
        debounceMs: 100
    });

    const {isIntersecting, isFullyVisible, intersectionRatio} = useIntersectionObserver({
        root: heroRef.current,
        freezeOnceVisible: true,
        initialIsIntersecting: true
    });

    useEffect(() => {
        if (!heroRef.current || !servicesRef.current) return;

        if (scrollDirection === 'down' && isIntersecting) {
            window.scrollTo({ top: servicesRef.current.offsetTop, behavior: 'smooth' });
            console.log("scrolled to serviceRef\n")
        }

        if(scrollDirection === 'up') {
            if (servicesRef.current.offsetTop === window.screenTop) {
                window.scrollTo(window.screenLeft, 0);
                console.log("scrolled to top\n")
            } else if (servicesRef.current.offsetTop - window.scrollY < 100  || isIntersecting) {
                window.scrollTo({ top: servicesRef.current.offsetTop, behavior: 'smooth' });
                console.log("scrolled to serviceRef\n")
            }
        }
    }, [scrollDirection, isIntersecting]);


    return (
        <div className="home">
            <div className="content">
             <Hero heroRef={heroRef}/>
             <Services servicesRef={servicesRef}/>
             <Testimonials/>
             <CTA/>
            </div>
        </div>
    );
}