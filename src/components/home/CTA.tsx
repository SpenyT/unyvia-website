import '../../styles/pageStyles/home/cta.css'

export default function CTA(){
    return(
        <>
        <div className="cta-container">


        <div className="cta-content">
            <div className="cta-header">  
                <h1>Don’t let something Something</h1>
            </div>
            <div className="cta-subheader">
                <h3>Schedule a free consultation now, and let the Savings come in</h3>
            </div>
            <div className="cta-metrics-container">
                <div className="cta-metric">
                    <h2>$16.1M</h2>
                    <p className='metric-text'>Average Saving per year</p>
                </div>
                <div className="vertical_divider"></div>
                <div className="cta-metric">
                    <h2>5x</h2>
                    <p className='metric-text'>Avg Efficiency increase or something</p>
                </div>
                 <div className="vertical_divider"></div>
                <div className="cta-metric">
                    <h2>40%</h2>
                    <p className='metric-text'>Enerygy conserved or something something</p>
                </div>
            </div>
            <div className="cta-button">
                <button>Schedule Now →</button>
                <h5>No Credit Card. Simple, Easy</h5>
            </div>
        </div>
        </div>
        </>
    )
}