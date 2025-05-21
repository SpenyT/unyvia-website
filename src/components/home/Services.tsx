import React from 'react';
import '../../styles/pageStyles/home/home.css';
import '../../styles/pageStyles/home/services.css'

// import Hero from '../components/home/Hero.tsx';



export default function Services() {

    return (
        <>
            <div className="service-content">
                <div className="service-intro">
                    <h3>
                    Bring your savings to the next level or some other text
                    </h3>
                </div>
                <div className="divider"></div>
                <div className="service-menu">
                    <div className="service-menu-card">
                        <div className="service-menu-card-title">Energy Audits & SubsidiesXS</div>
                        <div className="service-menu-card-subtitle">Optimize. Save. Sustain. </div>
                        <div className="service-menu-card-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas voluptatibus hic possimus, temporibus officia soluta consequuntur architecto doloremque? Optio modi distinctio incidunt? Eligendi possimus, nam pariatur enim magni nulla.</div>
                   </div>
                         
                    <div className="service-menu-card">
                        <h4>HVAC System Optimization </h4>
                    </div>
                    <div className="service-menu-card">
                        <h4>LED Lighting Solutions </h4>
                    </div>
                    <div className="service-menu-card">
                        <h4>Energy-as-a-Service (EaaS) Financing  </h4>
                    </div>
                    <div className="service-menu-card">
                        <h4>ecarbonization Services  </h4>
                    </div>
                    <div className="service-menu-card">
                        <h4>Solar Panels & Energy Storage Solutions  </h4>
                    </div>
                    

                </div>
            </div>
                
            
        </>
    );

}