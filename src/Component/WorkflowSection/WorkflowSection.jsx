import React from "react";
import './WorkflowSection.scss';
import { images } from "../../Assets/images";

export const WorkflowSection = () => {
    return(
        <>
        <section className="workflow">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title text-center">
                            <h5 data-aos="fade-down">Our Workflow</h5>
                            <hr data-aos="fade-up" data-aos-delay="200"/>
                            <h2 data-aos="fade-up" >From Strategy to Implementation</h2>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sl-6 col-12">
                        <div className="box-content text-center" data-aos="fade-right" data-aos-delay="400">
                            <img src={images.workflow1} alt="" />
                            <h3>Consultation</h3>
                            <p>We understand that every project is unique, and your vision is the cornerstone of our work. Our experts sit down with you to listen, learn, and discuss your specific needs and aspirations.</p>
                        </div>
                    </div>  
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sl-6 col-12">
                        <div className="box-content text-center" data-aos="fade-right" data-aos-delay="400">
                            <img src={images.workflow2} alt="" />
                            <h3>Design</h3>
                            <p>From selecting the right technology to optimizing energy efficiency, our design process is a harmonious blend of innovation and practicality. The result? A blueprint that will set the stage for seamless automation.</p>
                        </div>
                    </div>  
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sl-6 col-12">
                        <div className="box-content text-center" data-aos="fade-left" data-aos-delay="400">
                            <img src={images.workflow3} alt="" />
                            <h3>Installation</h3>
                            <p>With precision and efficiency, we transform your vision into a fully functional automation system. Our commitment to quality shines through every wire, every component, and every connection. The installation process is a true testament to our dedication to excellence.</p>
                        </div>
                    </div>  
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sl-6 col-12">
                        <div className="box-content text-center" data-aos="fade-left" data-aos-delay="400">
                            <img src={images.workflow4} alt="" />
                            <h3>Ongoing Support</h3>
                            <p>At TerraOne Engineering, we don't simply complete a project and walk away. Our team is just a call away, ready to troubleshoot, upgrade, and maintain your automation system. We're committed to the long-term success of your project, ensuring that efficiency and convenience remain at the forefront.</p>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
        </>
    )
}

