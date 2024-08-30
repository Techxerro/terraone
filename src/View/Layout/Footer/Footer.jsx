import React,{useState} from "react";
import './Footer.scss';
import Newsletter from "../../../Utils/Newsletter/Newsletter";

const Footer = () =>{
    
    const [openPopup, setopenPopup] = useState(false);

    return(
        <>
        <section className="contact-form-footer" id="contact">  
            <span>Contact</span>          
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <h3 data-aos="fade-up">Contact Us</h3>
                        <form action="" data-aos="fade-down">
                            <div className="d-flex">
                                <label>
                                    Name
                                    <input type="text" name="name" placeholder="Enter Full Name"/>
                                </label>
                                <label>
                                    Phone Number
                                    <input type="text" name="pohne" placeholder="Enter Phone No."/>
                                </label>
                                <label>
                                    Email Address
                                    <input type="text" name="name" placeholder="Enter Email Address"/>
                                </label>
                            </div>
                            <label>
                                Message
                                <textarea name="message" placeholder="How can we help you" cols="30" rows="5"/>
                            </label>
                            <label>
                                <input type="submit" value="Submit"/>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-12">
                        <div className="about-company">
                            <h2>Schedule a free Consultation</h2>
                            <button onClick={()=>setopenPopup(!openPopup)}>How Can We Help You?</button>
                            <p>Share your goals, thoughts, and ideas, and we will explore concepts, design, and build great online experiences making customers and users love and share your brand.</p>
                        </div>
                    </div>
                    <div className="col-xl-1 col-12"></div>
                    <div className="col-xl-4 col-lg-6 col-sm-6">
                        <div className="footer-info">
                            <span>
                                Phone no.
                                <p><a href="tel:347-470-1812">347-470-1812</a></p>
                            </span>
                            <span>
                                Find us
                                <p>
                                    <a href="https://www.google.com/maps?q=Prinsesse+Maries+All%C3%A9+11,+st.+th.+1908+Copenhagen&rlz=1C1RXQR_enIN1038IN1038&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCDIzOTFqMGo3qAIAsAIA&um=1&ie=UTF-8">Prinsesse Maries Allé 11, st. th. 1908 Copenhagen</a>
                                </p>
                            </span>
                            <span>
                                Email
                                <p><a href="mailto:info@terraone.engineering">info@terraone.engineering</a></p>
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-sm-6">
                        <div className="useful-link d-flex">
                            <ul>
                                <li><a href="/service">Services</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                                <li><a href="/blogs">Blogs</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                            <ul>
                                <li><a href="https://www.whatsapp.com/" target="_blank">Whatsapp</a></li>
                                <li><a href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank">Linkedin</a></li>
                                <li><a href="https://www.telegram.com/" target="_blank">Telegram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                        <div className="copyright-section">
                            <span>
                                ALL RIGHT RESERVED. Copyright@2023. 
                            </span> 
                            <span>
                                Privacy Policy
                            </span>                            
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
                        <div className="designer-link">
                            <span>
                               Designed by <a href="https://techqilla.com">Techqilla</a>
                            </span>
                        </div>                            
                    </div>
                </div>
            </div>
            
            <div className="newsletter-wrapper" style={{display:openPopup ? '' :'none'}}>
                <Newsletter title="Mail Us" subtitle="Get Consultancy for totally free" />
                <div className="overlay" onClick={()=>setopenPopup(!openPopup)}></div>
            </div>
        </footer>
        </>
    )
}
export default Footer;