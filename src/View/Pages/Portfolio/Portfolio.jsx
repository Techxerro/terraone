import React from "react";
import { images } from "../../../Assets/images";
import { Banner } from "../../../Utils/Banner";
import './Portfolio.scss';

export const Portfolio = () =>{
    return(
        <>
        <Banner banner={images.portfoliobanner} title="Portfolio" text="Lorem ipsum dolor sit amet consectetur. Tristique tellus odio ullamcorper semper sed aliquam."/>
        <section className="our-work">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title text-center">
                            <h5 data-aos="fade-up">Our Work</h5>
                            <hr data-aos="fade-up" data-aos-delay="200"/>
                            <h2 data-aos="fade-up">Explore our work</h2>
                        </div>
                    </div>                
                </div>
                <div className="row h-padding navy-section">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 no-padding">
                    <img src={require('../../../Assets/navyimg1.png')} alt="" width="100%" loading="lazy" data-aos="fade-right"/>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6 col-12 no-padding d-flex justify-content-center align-items-center">
                        <img src={require('../../../Assets/navylogo.png')} alt="" width="20%"  loading="lazy" data-aos="fade-up" />
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12 no-padding greenbox"  data-aos="fade-left">
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 no-padding d-flex align-items-center">
                        <div className="description" data-aos="fade-up">
                            <h2>United States NAVY</h2>
                            <p>The U.S. Navy was able to save 25% on their electrical consumption based upon the needs of the staff entering and working in of their building.</p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12 no-padding">
                        <img src={require('../../../Assets/navyimg2.png')} alt="" width="100%"  loading="lazy" data-aos="fade-left" data-aos-delay="200"/>
                    </div>
                    <div className="col-3 no-padding"></div>
                </div>
                

                <div className="row h-padding elilillyco-section">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <img src={require('../../../Assets/elilillyco.png')}  alt="" width="100%" loading="lazy" data-aos="fade-up"/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <img src={require('../../../Assets/lilly.png')}  alt="" id="elilillylogo" loading="lazy" data-aos="fade-left" data-aos-delay="300"/>
                            
                        <div className="description" data-aos="fade-down">
                            <h2>Eli Lilly & Company</h2>
                            <p>By upgrading from pneumatic controls to direct digital controls (DDC), we demonstrated to Eli Lilly & Company that newer technology can accomplish the same building temperature, humidity, and pressure requirements and consume approximately 25% less energy than before.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row generalmill-section">
                    <div className="col-xl-7 col-lg-7 col-md-6 col-sm-6 col-6 no-padding"></div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4 no-padding">
                        <img src={require('../../../Assets/generalmillimg2.png')} alt="" width="70%"  loading="lazy" data-aos="fade-left" /></div>
                        <div className="greenbox" data-aos="fade-right" data-aos-delay="300"></div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 no-padding"></div>
                    <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1 col-12 no-padding"></div>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-6 no-padding">
                        <img src={require('../../../Assets/generalmillimg1.png')} alt="" width="100%" loading="lazy" data-aos="fade-left" data-aos-delay="300" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-xl-4 col-lg-4 col-sm-4 col-md-5 col-12 no-padding d-flex align-items-center">
                        <div className="description" data-aos="fade-left" data-aos-delay="100">
                            <h2>General Mills</h2>
                            <p>General Mills had an energy reduction initiative of 15%. Our control schemes that interacted with the production allowed them to achieve their goal and more. One campus had a designed 20% electrical reduction just by adding one differential pressure sensor and controlling a pump based on that sensor.</p>
                            <img src={require('../../../Assets/generalmills.png')} alt=""  loading="lazy"/>
                        </div>
                    </div>
                </div>

                <div className="row h-padding airlines-section">
                    <div className="col-xl-1 col-lg-12 col-md-12 col-sm-12 col-1"></div>
                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-12 no-padding d-flex align-items-center">
                        <div className="description"  data-aos="fade-right">
                            <h2>United Airlines</h2>
                            <p>United Airlines has always been very aggressive in not wasting energy. When they opened up their Indianapolis Maintenance Center in 1994, we were given the challenge of reducing their energy consumption by 20% with a six-month ROI on any products purchased. With a brand new state-of-the-art facility, we were able to reduce their electrical consumption by 18% in just six months. We kept striving until we reached that goal of 20%.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding">
                        <img src={require('../../../Assets/unitedairlines1.png')} id="airline1" alt=""  loading="lazy"  data-aos="fade-left"/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding">
                        <img src={require('../../../Assets/unitedairlines2.png')}  alt="" id="airline2"  loading="lazy"  data-aos="fade-right" style={{float:'right'}}/>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding d-flex align-items-center justify-content-center">
                        <img src={require('../../../Assets/unitedairlines.png')}  alt="" loading="lazy"  data-aos="fade-down"/></div>
                
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding university-section d-flex align-items-center ">
                        
                        <div className="description" data-aos="fade-left" >
                            <img src={require('../../../Assets/IUPUI.jpg')}  alt=""  loading="lazy" data-aos="fade-up" />
                            <h2>Indiana University–Purdue University Indianpolis</h2>
                            <p>United Airlines has always been very aggressive in not wasting energy. When they opened up their Indianapolis Maintenance Center in 1994, we were given the challenge of reducing their energy consumption by 20% with a six-month ROI on any products purchased. With a brand new state-of-the-art facility, we were able to reduce their electrical consumption by 18% in just six months. We kept striving until we reached that goal of 20%.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 no-padding">
                        <img src={require('../../../Assets/university.png')}  alt="" id="universityimg" loading="lazy" data-aos="fade-right"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}