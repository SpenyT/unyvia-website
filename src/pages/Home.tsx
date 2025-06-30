import Services from '../components/home/Services';

import Testimonials from '../components/home/Testimonials';

import CTA from '../components/home/CTA';
// import Hero from '../components/home/Hero.tsx';


import Hero from '../components/home/Hero.tsx';



import '../styles/pageStyles/home/home.css';


export default function Home() {

    return (
        <div className="home">

            <div className="content">
             <Hero/>
             <Services></Services>
             <Testimonials></Testimonials>
             <CTA></CTA>
             
            </div>

            

        </div>
    );
}