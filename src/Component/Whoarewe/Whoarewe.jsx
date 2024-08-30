import React from "react";
import './Whoarewe.scss';
import { images } from "../../Assets/images";

const Whoarewe = () => {
    return(
        <>
        <section className="who-we-are">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-9 col-sm-9 col-12">
                        <div className="title">
                            <h5 data-aos="fade-down">Who We Are </h5>
                            <hr  data-aos="fade-up"/>
                            <h2  data-aos="fade-up">Integration for a Sustainable Tomorrow: Empowering Harmony with Nature!</h2>
                        </div>                        
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-3 col-sm-3">                        
                        <div className="text-right">
                            <button className="btn"><a href="/about">More About Us</a></button>
                        </div>
                    </div>
                    <div className="row" style={{padding:'0 20px'}}>
                        <div className="col-lg-8 col-xl-8 col-12">
                            <p data-aos="fade-up">With over 30 years of delivering the highest level of expertise in our field, ensuring the seamless integration of cutting-edge technology and innovative engineering. With a commitment to excellence, we strive to exceed our clients' expectations by delivering superior automation solutions that optimize efficiency, increase productivity, and enhance overall performance. Our experienced team of professionals is driven by a passion for excellence, a dedication to customer satisfaction, and a relentless pursuit of technological advancement. Together, we aim to establish TerraOne Engineering as a trusted partner in the realm of automation, setting new standards of quality, reliability, and service in the industry.</p>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                            <img  data-aos="fade-left" src={images.whoarewe1} alt="" style={{position:'relative',zIndex:'2',width:'100%'}}/>
                        </div>
                    </div>  
                    <img src={images.whoarewe2} alt="" id="floatimg" loading="lazy"/>               
                </div>
            </div>
        </section>
        </>
    )
} 
export default Whoarewe;