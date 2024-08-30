import React from "react";
import './WhyTerraone.scss';
import CountUp from 'react-countup';

const WhyTerraone = () =>{
    return(
        <>
        <section className="why-terraone">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 why-terraone-banner">
                        <div className="our-achivements">
                            <div> 
                                <h3><CountUp end={40} enableScrollSpy/>+ <br /> Clients</h3>
                            </div>
                            <div>
                                <h3><CountUp end={200} enableScrollSpy/>+<br />Project Done</h3>
                            </div>
                            <div>
                                <h3><CountUp end={60} enableScrollSpy/>+ <br />Countries Served</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-12 col-md-12 col-12 why-content">
                        <span data-aos="fade-down" data-aos-delay="300">Why TerraOne System Integration’</span>
                        <hr  data-aos="fade-up"/>
                        <h2 data-aos="fade-up">Your Trusted Partner for Seamless System Integration and Energy Excellence!</h2>
                        <p data-aos="fade-up">At TerraOne, we are dedicated to optimizing your energy management with precision. As experts in system integration, we tailor solutions to boost your business's potential, effectively managing electric, water, and natural gas usage while meeting your specific production, maintenance, and administrative needs. Our mission is to lead Ohio's Renewable Energy Management Consulting Services and pave the way towards a greener future</p>
                        <div className="d-grid" data-aos="fade-up">
                            <div>
                                <span className="dots" style={{background:'#174689'}}></span>
                                <h3>Energy Efficient </h3>
                                <p>We seamlessly integrate energy-efficient methods, ensuring your business operates at its greenest best.</p>
                            </div>
                            <div>
                                <span className="dots" style={{background:'#ADCC49'}}></span>
                                <h3>Long-Term Relationship</h3>
                                <p>Count on our unwavering support as your long-term energy management partner.</p>
                            </div>
                            <div>
                                <span className="dots" style={{background:'#C6272E'}}></span>
                                <h3>Day To Day Operations </h3>
                                <p>Our integration services bolster your company's day-to-day operations, ensuring seamless efficiency.</p>
                            </div>
                            <div>
                                <span className="dots" style={{background:'#174689'}}></span>
                                <h3>Reduce Energy Consumption. </h3>
                                <p>Our comprehensive services empower organizations to make a positive impact on the environment and their bottom line.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
export default WhyTerraone;