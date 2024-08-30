import React,{useRef}from "react";
import './OurPortfolio.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { images } from "../../Assets/images";

const OurPortfolio = () =>{
    const swiperRef = useRef(); 
    return(
        <>
        <section className="portfolio-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title text-center">
                            <h5 data-aos="fade-down" data-aos-delay="400">Our Portfolio</h5>
                            <hr/>
                            <h2 data-aos="slide-up" data-aos-delay="100">What our clients says about us</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 no-padding">
                        <div className="testimonials">
                            <Swiper
                            spaceBetween={90}
                            slidesPerView={2} 
                            centeredSlides={true}
                            autoplay={{delay:80000,disableOnInteraction:false,pauseOnMouseEnter: false,}}                  
                            modules={[Autoplay]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            breakpoints={{
                                320:{
                                    slidesPerView:1
                                },
                                480:{
                                    slidesPerView:1,
                                    spaceBetween:0
                                },
                                768:{
                                    slidesPerView:1
                                },                              
                                1024:{
                                    spaceBetween:10,
                                    slidesPerView:1,
                                },
                                1440:{
                                    spaceBetween:90,
                                    slidesPerView:2,

                                }
                            }}
                            >
                                <SwiperSlide >
                                    <div className="slideritem">
                                        <div className="slideritem-inner">
                                            <div className="client-img">
                                                <img src={images.client1} alt="" data-aos="fade-right" data-aos-delay="200"  loading="lazy"/>
                                            </div>
                                            <div className="clients-testimony" data-aos="fade-left" data-aos-delay="300">
                                                <span className="review" >Great</span>
                                                <p>Lorem ipsum dolor sit amet consectetur. Tristique tellus odio ullamcorper semper sed aliquam. Et lacus bibendum vitae gravida. Mi lorem condimentum tempus semper faucibus sit elit. Orci consectetur ultricies faucibus ipsum viverra amet. Amet pharetra est sit vestibulum.</p>
                                                <span className="client-job">Luca Micheli, CEO Customerlya</span>
                                                <span className="client-company">Communication Suite</span>                                                
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="slideritem">
                                        <div className="slideritem-inner">
                                            <div className="client-img">
                                                <img src={images.client2} alt="" loading="lazy"/>
                                            </div>
                                            <div className="clients-testimony">
                                                <span className="review">Great</span>
                                                <p>Lorem ipsum dolor sit amet consectetur. Tristique tellus odio ullamcorper semper sed aliquam. Et lacus bibendum vitae gravida. Mi lorem condimentum tempus semper faucibus sit elit. Orci consectetur ultricies faucibus ipsum viverra amet. Amet pharetra est sit vestibulum.</p>
                                                <span className="client-job">Luca Micheli, CEO Customerlya</span>
                                                <span className="client-company">Communication Suite</span>                                                
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="slideritem">
                                        <div className="slideritem-inner">
                                            <div className="client-img">
                                                <img src={images.client1} alt="" loading="lazy" />
                                            </div>
                                            <div className="clients-testimony">
                                                <span className="review">Great</span>
                                                <p>Lorem ipsum dolor sit amet consectetur. Tristique tellus odio ullamcorper semper sed aliquam. Et lacus bibendum vitae gravida. Mi lorem condimentum tempus semper faucibus sit elit. Orci consectetur ultricies faucibus ipsum viverra amet. Amet pharetra est sit vestibulum.</p>
                                                <span className="client-job">Luca Micheli, CEO Customerlya</span>
                                                <span className="client-company">Communication Suite</span>                                                
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                
                                <div className="custom-nav-1">
                                    <button onClick={() => swiperRef.current?.slidePrev()}>
                                        <svg width="72" height="51" viewBox="0 0 72 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.3" x="-0.5" y="0.5" width="71" height="50" rx="25" transform="matrix(-1 0 0 1 71 0)" fill="white" stroke="black"/>
                                        <g clip-path="url(#clip0_188_436)">
                                        <path d="M31.828 25L37.192 19.636L35.778 18.222L28 26L35.778 33.778L37.192 32.364L31.828 27H44V25H31.828Z" fill="black"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_188_436">
                                        <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 48 14)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </button>
                                    <button onClick={() => swiperRef.current?.slideNext()}>
                                        <svg width="72" height="51" viewBox="0 0 72 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.3" x="0.5" y="0.5" width="71" height="50" rx="25" fill="white" stroke="black"/>
                                        <g clip-path="url(#clip0_188_431)">
                                        <path d="M40.172 25L34.808 19.636L36.222 18.222L44 26L36.222 33.778L34.808 32.364L40.172 27H28V25H40.172Z" fill="black"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_188_431">
                                        <rect width="24" height="24" fill="white" transform="translate(24 14)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </button>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default OurPortfolio;