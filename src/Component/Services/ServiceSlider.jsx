import React from "react";
import './ServiceSlider.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ServicesSliderData from "./ServicesSliderData";

const ServiceSlider =()=>{
    const servicesSlider = {
        nav:true,
        items:4,
        navText:[
            `<svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.6893 41.1112C22.6893 40.8837 22.6022 40.6561 22.4289 40.4828L2.94649 20.9995L22.4289 1.51715C22.7764 1.16963 22.7764 0.607913 22.4289 0.260394C22.0814 -0.0871248 21.5196 -0.0871247 21.1721 0.260394L1.06136 20.3712C0.713841 20.7187 0.713841 21.2804 1.06136 21.6279L21.1721 41.7387C21.5196 42.0862 22.0814 42.0862 22.4289 41.7387C22.6031 41.5662 22.6893 41.3387 22.6893 41.1112Z" fill="white"/>
            </svg>
            `,`<svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.310705 41.1112C0.310705 40.8837 0.39781 40.6561 0.571125 40.4828L20.0535 20.9995L0.571127 1.51715C0.223608 1.16963 0.223608 0.607913 0.571127 0.260394C0.918646 -0.0871248 1.48036 -0.0871247 1.82788 0.260394L21.9386 20.3712C22.2862 20.7187 22.2862 21.2804 21.9386 21.6279L1.82788 41.7387C1.48036 42.0862 0.918644 42.0862 0.571125 41.7387C0.396921 41.5662 0.310705 41.3387 0.310705 41.1112Z" fill="white"/>
            </svg>
            `
        ],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:3
            },
            1440:{
                items:4
            }
            
        }
    }
    return(
        <>
        <section className="service-slider">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title text-center">
                            <h5 data-aos="fade-down">Our Services</h5>
                            <hr data-aos="fade-up" />
                            <h2 data-aos="fade-up">Leading the charge Towards Global Green Future</h2>
                        </div>
                    </div>                    
                </div>
            </div>
            <div className="container slider-container">
                <div className="row">
                    <div className="col-12">                        
                    <OwlCarousel className='owl-theme' {...servicesSlider} margin={20} loop >
                        {ServicesSliderData.map((obj)=>{
                            return(
                                <div class='item' data-aos="fade-up" data-aos-delay="200" key={obj.id}>
                                    {obj.icon}
                                    <h3 data-aos="slide-up" data-aos-delay="250">{obj.service}</h3>
                                    <p data-aos="slide-up" data-aos-delay="300">{obj.servicecontent}</p>
                                </div>
                            )
                        })}                                           
                    </OwlCarousel>
                    <div className="text-center">
                        <button className="btn" data-aos="fade-up" data-aos-delay="200"><a href="/service">Explore Services</a></button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ServiceSlider;