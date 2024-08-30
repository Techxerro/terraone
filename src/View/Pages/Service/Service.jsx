import React from "react";
import './Service.scss';
import { Banner } from "../../../Utils/Banner";
import { images } from "../../../Assets/images";
import ServicesSliderData from "../../../Component/Services/ServicesSliderData";
import { WorkflowSection } from "../../../Component/WorkflowSection/WorkflowSection";

export const Service = () =>{
    return(
        <>
        <Banner banner={images.servicebanner} title="Services" text="Our team of experts is equipped to handle all your system integration needs, whether it's renovation, maintenance, or optimization."/>
        <section className="services-list">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title text-center">
                            <h5 data-aos="fade-up">system Integration services</h5>
                            <hr data-aos="fade-up" data-aos-delay="400" />
                            <h2 data-aos="fade-up">Say goodbye to manual processes and hello to efficiency with TerraOne Engineering.</h2>
                        </div>
                    </div>
                    {ServicesSliderData.map((obj)=>{
                        return(
                            <>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={obj.id} style={{margin:'20px 0'}}>
                                <div className="service-items" data-aos="fade-up">
                                    {obj.icon}
                                    <h4>{obj.service}</h4>
                                    <p>{obj.servicecontentfull}</p>
                                </div>
                            </div>
                            </>
                        )
                    })}
                    <div className="col-4"></div>
                </div>
            </div>
        </section>
        <div className="workflow-wrapper" data-aos="fade-up">
            <WorkflowSection/>
        </div>
        
        </>
        )
}