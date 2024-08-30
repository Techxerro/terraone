import React from "react";
import { useRef } from "react";
import './Project.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { Autoplay,Scrollbar,Navigation } from 'swiper/modules';
import { images } from "../../Assets/images";

const Projects=()=>{
 
    const swiperRef = useRef(); 
    return(
        <>
        <section className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                        <div className="title">
                            <h5 data-aos="slide-right" data-aos-delay="100" >Portfolio</h5>
                            <hr data-aos="slide-right" data-aos-delay="200" />
                            <h2 data-aos="slide-right" data-aos-delay="100" >Projects</h2>
                        </div>             
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">                       
                        <div className="text-right">
                            <button className="btn hide-mob"><a href="/portfolio">View More</a></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 no-padding project-slider-container">
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{delay:8000,disableOnInteraction:false,pauseOnMouseEnter: false,}}                  
                    modules={[Navigation , Autoplay]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        320:{
                            slidesPerView:1,
                        },
                        480:{
                            slidesPerView:1,
                            spaceBetween:0
                        },
                        768:{
                            slidesPerView:1,
                            spaceBetween:10
                        },
                        1024:{                            
                            slidesPerView:3,
                            spaceBetween:10
                        },
                        1440:{
                            slidesPerView:3
                        }

                    }}
                    >
                        <SwiperSlide>
                            <div className="slideritem" style={{background:`url(${images.project1})`,backgroundSize:'cover'}}>
                                <h3 data-aos="slide-up" data-aos-delay="100">Project 1</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide > 
                            <div className="slideritem" style={{background:`url(${images.project2})`,backgroundSize:'cover'}}>
                                <h3 data-aos="slide-up" data-aos-delay="100">Project 2</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>  
                            <div className="slideritem" style={{background:`url(${images.project3})`,backgroundSize:'cover'}}>
                                <h3 data-aos="slide-up" data-aos-delay="100">Project 3</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>  
                            <div className="slideritem" style={{background:`url(${images.project4})`,backgroundSize:'cover'}}>
                                <h3 data-aos="slide-up" data-aos-delay="100">Project 4</h3>
                            </div>
                        </SwiperSlide>
                        
                        <div className="custom-nav">
                            <button onClick={() => swiperRef.current?.slidePrev()}>
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2115 0.423234C11.2115 0.531583 11.17 0.639932 11.0875 0.722463L1.81018 10.0002L11.0875 19.2775C11.253 19.443 11.253 19.7105 11.0875 19.876C10.922 20.0415 10.6545 20.0415 10.489 19.876L0.912499 10.2994C0.747013 10.134 0.747014 9.86647 0.912499 9.70098L10.4891 0.124431C10.6545 -0.0410544 10.922 -0.0410544 11.0875 0.124431C11.1705 0.206539 11.2115 0.314886 11.2115 0.423234Z" fill="white"/>
                                </svg>

                            </button>
                            <button onClick={() => swiperRef.current?.slideNext()}>
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.788488 19.5768C0.788488 19.4684 0.829967 19.3601 0.912498 19.2775L10.1898 9.99979L0.912498 0.722462C0.747013 0.556977 0.747013 0.289492 0.912498 0.124007C1.07798 -0.0414785 1.34547 -0.0414785 1.51095 0.124007L11.0875 9.70056C11.253 9.86604 11.253 10.1335 11.0875 10.299L1.51095 19.8756C1.34547 20.0411 1.07798 20.0411 0.912498 19.8756C0.829543 19.7935 0.788488 19.6851 0.788488 19.5768Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </Swiper>

                    <button className="btn hide-desktop"><a href="/portfolio">View More</a></button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects;