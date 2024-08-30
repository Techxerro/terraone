import React, {useRef} from "react";
import './About.scss';
import { Banner } from "../../../Utils/Banner";
import { images } from "../../../Assets/images";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
import { WorkflowSection } from "../../../Component/WorkflowSection/WorkflowSection";

const About= ()=>{
    const swiperRef = useRef(); 

    const slidesData=[
        {
            id:1,
            title:'Our Mission',
            para:['TerraOne Systems Integration works with the vision of delivering solutions that are reliable, efficient, and cost-effective.  Our team meticulously plans and executes each project, paying attention to every detail to ensure seamless integration and optimal performance.  Downtime can hurt businesses, so we focus on sticking to schedules. Our team works efficiently to minimize disruptions and ensure a smooth transition to your new system. We take pride in our customer-centric approach, prioritizing strong client relationships. ',<br/>,' We work collaboratively, with open communication and transparency, ensuring clients are involved in every step. '],            
        }, 
        {
            id:2,
            title:'Our Vision',
            para:'Terraone works with the vision of delivering solutions that are reliable, efficient, and cost-effective. Our team meticulously plans and executes each project, paying attention to every detail to ensure seamless integration and optimal performance. Downtime can hurt businesses, so we focus on sticking to schedules. Our team works efficiently to minimize disruptions and ensure a smooth transition to your new system.',            
        },
    ]
    return(
        <>
        <Banner banner={images.aboutbanner} title="About us" text="Terraone is committed to helping businesses optimize their processes and achieve maximum efficiency."/>
        <section className="about-intro">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-12">
                        <div className="intro-title" data-aos="fade-up">
                            <div className="title">
                                <h5 >About</h5>
                                <hr />
                                <h2>Welcome to our system Intergration Company</h2>
                            </div>
                            <img src={images.welcomeimg} alt="" id="welcomeimg" data-aos="fade-up" data-aos-delay="600"/>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-12">
                        <div className="intro-content">
                            <h3 data-aos="fade-left">Welcome to our system integration company</h3>
                            <p data-aos="fade-right" data-aos-delay="200">TerraOne Engineering has built a reputation for delivering exceptional results. We understand the challenges faced by businesses in today's fast-paced world, and we are here to provide innovative solutions that streamline operations and drive productivity.<br/>Our team of skilled professionals is equipped with the knowledge and expertise to design, implement, and maintain automation systems tailored to the unique needs of each client. Whether you require a small-scale upgrade or a comprehensive system overhaul, our experts have the technical know-how to deliver outstanding results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about-slider">
            <div className="about-slider-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Swiper slidesPerView={1} spaceBetween={100} pagination={{type: 'fraction',}} autoplay={{delay:80000,disableOnInteraction:false,pauseOnMouseEnter: false,}} modules={[Navigation,Autoplay,Pagination]} onBeforeInit={(swiper) => {swiperRef.current = swiper;}}>   
                                {
                                    slidesData.map((obj)=>{
                                        return(
                                            <SwiperSlide >
                                                <div className="slideitem row" key={obj.id}>
                                                    <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                                                        <h3 data-aos="fade-right">{obj.title}</h3>
                                                        <p data-aos="fade-left">{obj.para}</p>
                                                        <div className="row">
                                                            <div className="col-lg-1 col-12"></div>
                                                            <div className="col-12 col-md-3 col-xl-3 col-lg-3 ">
                                                                <img src={images.mission2} alt="" loading="lazy" data-aos="fade"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-5 col-lg-5 col-md-5 col-12 ">
                                                        <img src={images.mission1} alt="" id="missionimg1" loading="lazy" data-aos="fade-up"/>
                                                    </div>
                                                </div>                                
                                            </SwiperSlide>
                                        )
                                    })
                                }                           
                                
                                <div className="custom-nav">
                                    <button onClick={() => swiperRef.current?.slidePrev()}>
                                        <svg width="47" height="8" viewBox="0 0 47 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM47 3.5L1 3.5V4.5L47 4.5V3.5Z" fill="black"/></svg>
                                    </button>
                                    <button onClick={() => swiperRef.current?.slideNext()}>
                                        <svg width="47" height="8" viewBox="0 0 47 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.3536 3.64645C46.5488 3.84171 46.5488 4.15829 46.3536 4.35355L43.1716 7.53553C42.9763 7.7308 42.6597 7.7308 42.4645 7.53553C42.2692 7.34027 42.2692 7.02369 42.4645 6.82843L45.2929 4L42.4645 1.17157C42.2692 0.976311 42.2692 0.659728 42.4645 0.464466C42.6597 0.269204 42.9763 0.269204 43.1716 0.464466L46.3536 3.64645ZM0 3.5L46 3.5V4.5L0 4.5L0 3.5Z" fill="black"/></svg>
                                    </button>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
        <WorkflowSection/>
        <section className="founder" data-aos="fade-up">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="title text-center" >
                            <h5 data-aos="fade-up">Meet the founder</h5>
                            <hr data-aos="fade-up" data-aos-delay="200"/>
                            <h2 data-aos="fade-up" data-aos-delay="400">A Leader Dedicated To Energy Management</h2>
                            <p data-aos="fade-up" data-aos-delay="200">Dwayne’s work has helped clients save energy in markets from aviation to <br/>pharmaceutical to food and beverage to education and to our military.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="box-content text-center">
                            <img src={images.founder} alt="" loading="lazy" data-aos="fade-up"/>
                            <h3 data-aos="fade-up" data-aos-delay="200">DWAYNE PURVIS</h3>
                            <h4 data-aos="fade-up" data-aos-delay="200">Founder & CEO</h4>    
                        </div>
                    </div>              
                </div>
            </div>
        </section>
        </>

    )
}

export default About;