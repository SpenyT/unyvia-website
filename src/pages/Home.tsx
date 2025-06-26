import React from 'react';
import '../styles/pageStyles/home/home.css';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';
// import Hero from '../components/home/Hero.tsx';



export default function Home() {

    return (
        <div className="home">
            <div className="content">
             <Services></Services>
             <Testimonials></Testimonials>
             <CTA></CTA>
             
            </div>
        </div>
    );
}