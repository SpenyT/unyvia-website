import Services from '../components/home/Services';

import Testimonials from '../components/home/Testimonials';

import Hero from '../components/home/Hero.tsx';


import '../styles/pageStyles/home/home.css';


export default function Home() {

    return (
        <div className="home">

            <div className="content">
             <Hero/>
             <Services></Services>
             <Testimonials></Testimonials>
            </div>

            

        </div>
    );
}