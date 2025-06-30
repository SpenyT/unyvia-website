
import '../../styles/pageStyles/home/home.css';
import '../../styles/pageStyles/home/services.css'

import EnergyAuditLogo from '../../assets/energy-audit.svg?react'
import HVACLogo from '../../assets/hvac.svg?react'
import LEDLogo from '../../assets/led.svg?react'
import DecarbonLogo from '../../assets/decarbon.svg?react'
import EnergyAsaService from '../../assets/eas.svg?react'
import SolarLogo from '../../assets/solar.svg?react'
// import Hero from '../components/home/Hero.tsx';
import ServiceMenuCard from './ServiceCard';



export default function Services() {

    return (
        <>
            <div className="service-content">
                <div className="service-intro">
                    <h2>
                    Bring your savings to the next level
                    </h2>
                </div>
                <div className="divider"></div>
                <div className="service-menu">
                    <ServiceMenuCard>
                        <div className="service-menu-card-title"><h4>Energy Audits & Subsidies</h4></div>
                        <div className="service-menu-card-subtitle">Optimize. Save. Sustain. </div>
                        <div className="service-menu-card-body">
                            <div className="service-icon">
                                <EnergyAuditLogo className='logo-icon'/>
                            </div>
                            <div className='service-info'> 
                                <ul>
                                    <li>Level I, II, III energy audits</li>
                                    <li>Customized reports with actionable plans</li>
                                    <li>Subsidy and grant application support</li>
                                    <li>Energy performance tracking</li>
                                    <li>ROI-focused upgrade recommendations</li>
                                </ul>
                            </div>
                        </div>
                        <div className="service-menu-card-cta">
                            Learn More <span className="arrow">→</span>
                        </div>
                   
                   </ServiceMenuCard>
                    <ServiceMenuCard>
                   
                        <div className="service-menu-card-title"><h4>HVAC System Optimization </h4></div>
                        <div className="service-menu-card-subtitle">Breathe easier. Spend smarter. </div>
                        <div className="service-menu-card-body">
                            <div className="service-icon">
                                <HVACLogo className='logo-icon'/>
                            </div>
                            <div className='service-info'> 
                            <ul>
                                <li>HVAC design and retrofitting</li>
                                <li>Smart controls & predictive maintenance</li>
                                <li>Integrated Design-Build execution</li>
                                <li>Indoor air quality enhancements</li>
                                <li>Ongoing maintenance and monitoring</li>
                            </ul>

                            </div>
                        </div>
                        <div className="service-menu-card-cta">
                            Learn More <span className="arrow">→</span>
                        </div>
                    </ServiceMenuCard>
                    <ServiceMenuCard>
                   
                         <div className="service-menu-card-title"><h4>LED Lighting Solutions</h4></div>
                        <div className="service-menu-card-subtitle">Light smarter. Shine brighter.</div>
                        <div className="service-menu-card-body">
                            <div className="service-icon">
                                <LEDLogo className='logo-icon'/>
                            </div>
                            <div className='service-info'> 
                            <ul>
                                <li>LED retrofits and new lighting design</li>
                                <li>Photometric and application engineering</li>
                                <li>Emergency and high-performance lighting</li>
                                <li>Direct distributor pricing</li>
                                <li>Inventory and logistics optimization (VMI)</li>
                            </ul>


                            </div>
                        </div>
                        <div className="service-menu-card-cta">
                            Learn More <span className="arrow">→</span>
                        </div>
                    </ServiceMenuCard>
                    <ServiceMenuCard>
                        <div className="service-menu-card-title"><h4>Decarbonization Services </h4></div>
                        <div className="service-menu-card-subtitle">Your path to net zero starts here. </div>
                        <div className="service-menu-card-body">
                            <div className="service-icon">
                                <DecarbonLogo className='logo-icon'/>
                            </div>
                            <div className='service-info'> 
                         <ul>
                            <li>Carbon footprint analysis</li>
                            <li>Strategic reduction planning</li>
                            <li>Full implementation support</li>
                            <li>Regulatory and certification compliance (LEED, Zero Carbon)</li>
                            <li>Monitoring and performance optimization</li>
                        </ul>


                            </div>
                        </div>
                        <div className="service-menu-card-cta">
                            Learn More <span className="arrow">→</span>
                        </div>
                    </ServiceMenuCard>
                    <ServiceMenuCard>
                         <div className="service-menu-card-title"><h4>Energy-as-a-Service (EaaS) Financing </h4></div>
                        <div className="service-menu-card-subtitle">No CAPEX. No debt. No delays. </div>
                        <div className="service-menu-card-body">
                            <div className="service-icon">
                                <EnergyAsaService className='logo-icon'/>
                            </div>
                            <div className='service-info'> 
                                <ul>
                                    <li>Zero-CAPEX project financing</li>
                                    <li>Fixed monthly payments</li>
                                    <li>Immediate operational savings</li>
                                    <li>Full project implementation and maintenance</li>
                                    <li>$1 buyback at end of term</li>
                                </ul>



                            </div>
                        </div>
                        <div className="service-menu-card-cta">
                            Learn More <span className="arrow">→</span>
                        </div>
                    </ServiceMenuCard>
                    <ServiceMenuCard>
                         <div className="service-menu-card-title"><h4>Solar Panels & Energy Storage Solutions</h4></div>
                        <div className="service-menu-card-subtitle">Power your future—naturally.</div>
                        <div className="service-menu-card-body">
                            <div className="service-icon">
                                <SolarLogo className='logo-icon'/>
                            </div>
                            <div className='service-info'> 
                               <ul>
                                    <li>Solar PV design and installation</li>
                                    <li>Battery storage and grid independence</li>
                                    <li>Smart energy management systems</li>
                                    <li>Performance monitoring and support</li>
                                    <li>EaaS financing options</li>
                                </ul>



                            </div>
                        </div>
                        <div className="service-menu-card-cta">
                            Learn More <span className="arrow">→</span>
                        </div>
                    </ServiceMenuCard>
                    

                </div>
            </div>
                
            
        </>
    );

}