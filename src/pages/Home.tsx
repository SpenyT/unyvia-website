import Services from '../components/home/Services';
import Hero from '../components/home/Hero.tsx';

import '../styles/pageStyles/home/home.css';


export default function Home() {

    return (
        <div className="home">
            <Hero/>
            <Services/>
        </div>
    );
}