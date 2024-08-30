import React, {useState} from "react";
import './Header.scss';
import { images } from "../../../Assets/images";
import Newsletter from "../../../Utils/Newsletter/Newsletter";

const Header = () =>{
    
    const [openMenu, setopenMenu] = useState(false);
    const [openPopup, setopenPopup] = useState(false);
    return(
        <>
        <header>    
            <div className="container top-header">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="header-info">
                            <span className="header-info-item">
                                <a href="">
                                {/* Phone icon */}
                                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 0H2.5C1.12 0 0 1.12 0 2.5V19.5C0 20.88 1.12 22 2.5 22H10.5C11.88 22 13 20.88 13 19.5V2.5C13 1.12 11.88 0 10.5 0ZM6.5 21C5.67 21 5 20.33 5 19.5C5 18.67 5.67 18 6.5 18C7.33 18 8 18.67 8 19.5C8 20.33 7.33 21 6.5 21ZM11 17H2V3H11V17Z" fill="#174689"/>
                                </svg>
                                347-470-1812
                                </a>
                            </span>

                            <span className="header-info-item">   
                                <a href="">                  
                                {/* Mail icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 3H4C1.8 3 0 4.8 0 7V17C0 19.2 1.8 21 4 21H20C22.2 21 24 19.2 24 17V7C24 4.8 22.2 3 20 3ZM21.6 8.8L13.7 14.1C13.2 14.4 12.6 14.6 12 14.6C11.4 14.6 10.8 14.4 10.3 14.1L2.4 8.8C2 8.5 1.9 7.9 2.2 7.4C2.5 7 3.1 6.9 3.6 7.2L11.5 12.5C11.8 12.7 12.3 12.7 12.6 12.5L20.5 7.2C21 6.9 21.6 7 21.9 7.5C22.1 7.9 22 8.5 21.6 8.8Z" fill="#174689"/>
                                </svg>
                                info@terraone.engineering
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="social-icons">
                            {/* Whatsapp icon */}
                            <span>
                                <a href="https://www.whatsapp.com" target="_blank">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.18 3.96863C15.4571 2.24378 13.166 1.29348 10.7249 1.29248C5.69519 1.29248 1.60153 5.3858 1.59957 10.4171C1.59886 12.0254 2.01906 13.5952 2.81764 14.9791L1.52304 19.7077L6.36049 18.4387C7.69332 19.1657 9.19399 19.5489 10.7212 19.5494H10.725C10.7247 19.5494 10.7253 19.5494 10.725 19.5494C15.7541 19.5494 19.8481 15.4557 19.8502 10.4243C19.8511 7.98605 18.9028 5.69339 17.18 3.96863ZM10.7249 18.0083H10.7218C9.36093 18.0078 8.02606 17.6421 6.86155 16.9511L6.58463 16.7868L3.71401 17.5397L4.48026 14.741L4.2999 14.454C3.5407 13.2464 3.13972 11.8507 3.14031 10.4176C3.14194 6.23579 6.54444 2.83367 10.728 2.83367C12.7538 2.8343 14.6581 3.62429 16.0901 5.05791C17.5221 6.49153 18.3103 8.39714 18.3094 10.4237C18.3077 14.6058 14.9054 18.0083 10.7249 18.0083Z" fill="#174689"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8852 12.328C14.6572 12.2138 13.5362 11.6623 13.3272 11.5862C13.1182 11.5101 12.9662 11.472 12.8142 11.7003C12.6622 11.9285 12.2253 12.4421 12.0922 12.5943C11.9593 12.7464 11.8262 12.7656 11.5983 12.6513C11.3703 12.5372 10.6356 12.2965 9.76469 11.5197C9.08683 10.915 8.62926 10.1684 8.4962 9.9401C8.36322 9.71189 8.48205 9.58851 8.59622 9.47479C8.69878 9.37259 8.82424 9.2085 8.93826 9.07533C9.05223 8.94224 9.09024 8.84704 9.16625 8.69499C9.24226 8.54278 9.20429 8.40962 9.14725 8.29553C9.09024 8.18141 8.63426 7.05912 8.44427 6.60251C8.25914 6.15797 8.07119 6.2182 7.93121 6.21113C7.79841 6.2045 7.64621 6.20312 7.49423 6.20312C7.34225 6.20312 7.09518 6.26021 6.88623 6.48842C6.67724 6.71671 6.08817 7.26837 6.08817 8.39054C6.08817 9.51287 6.90519 10.5971 7.01921 10.7492C7.13318 10.9014 8.627 13.2044 10.9142 14.192C11.4582 14.427 11.883 14.5673 12.2141 14.6723C12.7603 14.8459 13.2573 14.8214 13.6502 14.7627C14.0883 14.6972 14.9992 14.2111 15.1892 13.6786C15.3792 13.1459 15.3792 12.6893 15.3222 12.5943C15.2652 12.4992 15.1132 12.4421 14.8852 12.328Z" fill="#174689"/>
                                    </svg> 
                                </a>                           
                            </span>
                            {/* Facebook icon */}
                            <span>
                                <a href="https://www.facebook.com" target="_blank">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.9759 8.05248H12.1441V6.19521C12.1441 5.49772 12.6064 5.3351 12.932 5.3351C13.2568 5.3351 14.9304 5.3351 14.9304 5.3351V2.2688L12.1782 2.25806C9.12298 2.25806 8.42771 4.54501 8.42771 6.00852V8.05248H6.66083V11.2121H8.42771C8.42771 15.2671 8.42771 20.1529 8.42771 20.1529H12.1441C12.1441 20.1529 12.1441 15.2189 12.1441 11.2121H14.6518L14.9759 8.05248Z" fill="#174689"/>
                                    </svg>
                                </a>
                            </span>
                            {/* Linkedin icon */}
                            <span>
                                <a href="https://www.linkedin.com" target="_blank">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.10517 7.62283H5.79703V18.7328H2.10517V7.62283ZM3.97581 2.26733C2.71224 2.26733 1.88672 3.09688 1.88672 4.18568C1.88672 5.25208 2.68808 6.10574 3.92749 6.10574H3.95104C5.23876 6.10574 6.0407 5.25204 6.0407 4.18568C6.01654 3.09688 5.2388 2.26733 3.97581 2.26733ZM14.8616 7.36184C12.9019 7.36184 12.0239 8.43973 11.5342 9.19565V7.62283H7.8412C7.89009 8.66507 7.8412 18.7328 7.8412 18.7328H11.5342V12.5282C11.5342 12.1959 11.5583 11.8648 11.6555 11.6268C11.9229 10.9634 12.5305 10.2764 13.5497 10.2764C14.8869 10.2764 15.4209 11.2957 15.4209 12.7885V18.7328H19.1133V12.3621C19.1133 8.94964 17.2921 7.36184 14.8616 7.36184Z" fill="#174689"/>
                                    </svg>
                                </a>
                            </span>

                            {/* Telegram icon */}
                            <span className="svghover"> 
                                <a href="https://www.telegram.com" target="_blank">                       
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_188_49)">
                                    <path d="M7.21878 11.0661L14.5934 17.5548C14.6786 17.6302 14.782 17.6822 14.8934 17.7056C15.0048 17.729 15.1203 17.7231 15.2287 17.6883C15.3371 17.6536 15.4346 17.5912 15.5116 17.5074C15.5886 17.4236 15.6425 17.3212 15.668 17.2102L18.7524 3.74071C18.7782 3.62471 18.7721 3.50386 18.7347 3.39107C18.6972 3.27828 18.6298 3.17778 18.5397 3.1003C18.4496 3.02281 18.3401 2.97125 18.223 2.95113C18.1058 2.931 17.9854 2.94306 17.8746 2.98602L2.73167 8.93329C2.12463 9.17118 2.20667 10.0571 2.84651 10.1884L7.21878 11.0661Z" stroke="#174689" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.21875 11.0661L18.3832 3.00244" stroke="#174689" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.902 14.3062L8.34258 16.8655C8.25127 16.9582 8.13446 17.0217 8.00699 17.0479C7.87952 17.0741 7.74715 17.0618 7.62669 17.0125C7.50624 16.9633 7.40314 16.8793 7.3305 16.7714C7.25787 16.6634 7.21897 16.5363 7.21875 16.4062V11.0659" stroke="#174689" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_188_49">
                                    <rect width="21" height="21" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container main-header">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                        <a href="/"><img src={images.logo} alt="" id="logo" loading="lazy"/></a> 
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-6 d-grid align-items-center">
                        <div className="menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/service">Services</a></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                                <li><a href="/blogs">Blogs</a></li>                                
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                            <button onClick={()=>setopenPopup(!openPopup)}>Get Free Consultancy</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-header-mobile">
                <div className="container">
                    <div className="row">
                        <div className="col-6 no-padding">
                            <img src={images.mobilelogo} alt="" className="logo" style={{width:'30dvw'}} loading="lazy"/>
                        </div>
                        <div className="col-6 no-padding d-flex align-items-center justify-content-end">                                
                            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setopenMenu(!openMenu)}>
                                <rect y="7" width="23" height="2" rx="1" fill="black"/>
                                <rect x="4" y="14" width="19" height="2" rx="1" fill="black"/>
                                <rect width="15" height="2" rx="1" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobilemenu" style={{display:openMenu ? 'block' : 'none'}}>   
                <svg width="22" height="22" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={()=>setopenMenu(!openMenu)}>
                    <path d="M2 2L24.6411 24.6411" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    <path d="M2.68115 25.3206L25.3222 2.67948" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <br/>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/service">Services</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                </ul> 
            </div>
            <div className="newsletter-wrapper" style={{display:openPopup ? '' :'none'}}>
                <Newsletter title="Mail Us" subtitle="Get Consultancy for totally free" />
                <div className="overlay" onClick={()=>setopenPopup(!openPopup)}></div>
            </div>
        </header>


        </> 

    )
}

export default Header;