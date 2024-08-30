import React from "react";
import { useRef } from "react";
import { images } from "../../Assets/images";
import './HeroSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';


const HeroSlider = () => {
    
  const swiperRef = useRef(); 
    return(
        <>
        <Swiper
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          type: 'fraction',
        }} 
        className="hero-slider-wrapper"        
        autoplay={{delay:80000,disableOnInteraction:false,pauseOnMouseEnter: false,}}                  
        modules={[Navigation,Autoplay,Pagination]}
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
        
        <SwiperSlide>
        <section className="hero-slider"data-aos="fade-up">
            <div className="container-fluid">
                <div className="row">  
                    <div className="col-sm-12 col-12 mobileimg">
                        <img src={images.heroimgmobile} alt=""  loading="lazy"/>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 d-flex align-items-center justify-content-end">
                        <div className="content">
                            <img src={images.sliderimg1} alt="" id="heroimg1"  loading="lazy"/>
                            <h2 data-aos="fade-down" data-aos-delay="200">Automate your construction projects with TerraOne Engineering.</h2>
                            <p data-aos="fade-up" data-aos-delay="250">From new construction to system upgrades, TerraOne Engineering provides top-notch automation solutions. Whether you need renovation or system maintenance, our team has got you covered. Say goodbye to manual processes and hello to efficiency with TerraOne Engineering.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex align-items-center">
                        <img src={images.sliderimg2} alt="" data-aos="fade-up" id="heroimg2"  loading="lazy"/>
                    </div>
                </div>
            </div>
        </section>
        </SwiperSlide>
        <SwiperSlide >
        <section className="hero-slider diagonal-bg" data-aos="fade-up">
            <div className="container">
                <div className="row align-items-center"> 
                    <div className="col-12">
                        <img src={images.sliderimg4} alt="" id="hide-desktop"/>
                    </div> 
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 d-flex  justify-content-start">
                    
                        <div className="content"> 
                            <h2 data-aos="fade-down" data-aos-delay="200">Automate your construction projects with TerraOne Engineering.</h2>
                            <p data-aos="fade-up" data-aos-delay="250">From new construction to system upgrades, TerraOne Engineering provides top-notch automation solutions. Whether you need renovation or system maintenance, our team has got you covered. Say goodbye to manual processes and hello to efficiency with TerraOne Engineering.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">                        
                    </div>
                </div>
            </div>
        </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className="hero-slider slide3"data-aos="fade-up">
            <div className="container ">
                <div className="row">   
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 d-flex align-items-center justify-content-start">
                        <div className="content"> 
                            <h2 data-aos="fade-down" data-aos-delay="200">Saving the planet. One step at a time</h2>
                            <p data-aos="fade-up" data-aos-delay="250">From new construction to system upgrades, TerraOne Engineering provides top-notch automation solutions. Whether you need renovation or system maintenance, our team has got you covered. Say goodbye to manual processes and hello to efficiency with TerraOne Engineering.</p>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <img src={images.sliderimg3} alt="" data-aos="fade-up" id="heroimg3"  loading="lazy"/>
                    </div>
                </div>
            </div>
        </section>
        </SwiperSlide>
        <div className="custom-nav">
            <button onClick={() => swiperRef.current?.slidePrev()}>
                <svg width="47" height="8" viewBox="0 0 47 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM47 3.5L1 3.5V4.5L47 4.5V3.5Z" fill="black"/>
                </svg>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
                <svg width="47" height="8" viewBox="0 0 47 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.3536 3.64645C46.5488 3.84171 46.5488 4.15829 46.3536 4.35355L43.1716 7.53553C42.9763 7.7308 42.6597 7.7308 42.4645 7.53553C42.2692 7.34027 42.2692 7.02369 42.4645 6.82843L45.2929 4L42.4645 1.17157C42.2692 0.976311 42.2692 0.659728 42.4645 0.464466C42.6597 0.269204 42.9763 0.269204 43.1716 0.464466L46.3536 3.64645ZM0 3.5L46 3.5V4.5L0 4.5L0 3.5Z" fill="black"/>
                </svg>
            </button>
        </div>
        </Swiper>
        </>
    )
}

export default HeroSlider;