import React, {useState} from "react";
import './Blogs.scss';
import { Banner } from "../../../Utils/Banner";
import { images } from "../../../Assets/images";
import Newsletter from "../../../Utils/Newsletter/Newsletter";

const BlogPost =({ id,title, primaryimg,date,category,shortdesc,longdesc, isExpanded, onToggle })=> {
    return (
        <div className="blogs-items" style={{display:`${isExpanded ? 'block' : ''}`}} data-aos="fade-up">
            <div className="parameters-fullview" style={{display:`${isExpanded ? 'block' : 'none'}`}}>
                <h3>{title}</h3>
                <span>{date}</span>
            </div>
            <div className="img-wrapper" >
                <img src={primaryimg} alt="" style={{width:`${isExpanded ? '100%' : ''}`,height:`${isExpanded ? '60vh' : ''}`}} loading="lazy"/>
            </div>
            <div className="blog-content-wrapper">
                <div className="blog-content">
                    <div className="parameters-shortview" style={{display:`${isExpanded ? 'none' : ''}`}}>
                        <span>{date}</span>
                        <span class="category">{category}</span>
                    </div>
                    <div className="title" style={{display:`${isExpanded ? 'none' : 'block'}`}}>
                        <h3>{title}</h3>
                    </div>                                
                    <p className="shortdescription" style={{display:`${isExpanded ? 'none' : 'block'}`}}>{shortdesc}</p>
                    <div className="longdescription" style={{display:`${isExpanded ? 'block' : 'none'}`}}>
                        {longdesc}
                    </div>
                    <button onClick={() => onToggle(id)}>{isExpanded ? 'Read Less' : 'Read More'}</button>    
                </div>
            </div>
        </div>
    );
}


export const Blog = () =>{
    const posts =    [
        {
            id:1,
            title:'Types of energy management',
            shortdesc:'New technologies and practices for on-farm energy management is improving the producers economic and enable environmental sustainability in agriculture. When seeing energy use, you ought to add energy bills, submeters, and assessments.',
            longdesc:[
                <p style={{padding:'20px 0'}}>
                New technologies and practices for on-farm energy management is improving the producers economic and enable environmental sustainability in agriculture. When seeing energy use, you ought to add energy bills, submeters, and assessments.
                <br/>
                SUBMETER<br/>
                A submeter is an electricity or we can say a gas meter that is completely installed downstream of the main utility meter. They can be utilized to distinguish the energy use of a particular region. Submeters are valuable for gathering energy use design data.They can be utilized to follow utilization as detailed as a load-by-load basis. Submeters are accessible for power, petroleum gas, water, and fuel.
                ENERGY BILLS<br/>
                Monitoring your month -to- month energy utilization expenses can give a gauge of the expense of production and identify trends or problems.
                ENERGY EFFICIENCY<br/>
                Energy productivity is accomplishing a similar work with less energy. An obvious way to improve efficiency is to replace older powered equipment with higher efficiency equipment at the end of its service life. Occasionally it makes economic sense to replace equipment sooner depending on the sort of hardware, cost of fuel, day by day and yearly run-times, and the degree of efficiency.
                Important areas for energy efficiency include:
                <ol style={{padding:'20px'}}>
                    <li>lighting</li>
                    <li>heating</li>
                    <li>refrigeration</li>
                    <li>waterers</li>
                    <li>variable frequency drives (especially for irrigation)</li>
                    <li>controllers</li>
                    <li>grain dryer</li>
                    <li>combined heat and power</li>
                    <li>RENEWABLE ENERGY</li>
                </ol>                
                Renewable energy technologies convert renewable resources, which can be fill up indefinitely, into electric or heat energy with diminished carbon emissions contrasted with traditional energy (conventional energy) sources
                Wind power, sunlight based photovoltaics, and limited scope hydroelectric generation have zero greenhouse gas emissions from generation. Solar photovoltaics is generally accessible and available at residential and farm scales Costs have dropped for even limited scope renewable energy and can give a good Levelized cost of energy when contrasted with grid-purchased electricity and help with reliability issues.',
                </p>
            ],
            date:'Jan 25 2023',
            category:'Energy',
            primaryimg:images.project1,
        },
        {
            id:2,
            title:'4 BEST QUESTIONS TO ASK YOUR BUILDING ENERGY CONSULTANT',
            shortdesc:'Description: In this article, we will look, at which questions you should ask your building energy consultant. From general stores to big factories and buildings, companies are effectively searching for ways of saving energy to be more productive and have more command over their costs.',
            longdesc:[
                <p style={{padding:'20px 0'}}>
                New technologies and practices for on-farm energy management is improving the producers economic and enable environmental sustainability in agriculture. When seeing energy use, you ought to add energy bills, submeters, and assessments.
                <br/>
                SUBMETER<br/>
                A submeter is an electricity or we can say a gas meter that is completely installed downstream of the main utility meter. They can be utilized to distinguish the energy use of a particular region. Submeters are valuable for gathering energy use design data.They can be utilized to follow utilization as detailed as a load-by-load basis. Submeters are accessible for power, petroleum gas, water, and fuel.
                ENERGY BILLS<br/>
                Monitoring your month -to- month energy utilization expenses can give a gauge of the expense of production and identify trends or problems.
                ENERGY EFFICIENCY<br/>
                Energy productivity is accomplishing a similar work with less energy. An obvious way to improve efficiency is to replace older powered equipment with higher efficiency equipment at the end of its service life. Occasionally it makes economic sense to replace equipment sooner depending on the sort of hardware, cost of fuel, day by day and yearly run-times, and the degree of efficiency.
                Important areas for energy efficiency include:
                <ol style={{padding:'20px'}}>
                    <li>lighting</li>
                    <li>heating</li>
                    <li>refrigeration</li>
                    <li>waterers</li>
                    <li>variable frequency drives (especially for irrigation)</li>
                    <li>controllers</li>
                    <li>grain dryer</li>
                    <li>combined heat and power</li>
                    <li>RENEWABLE ENERGY</li>
                </ol>                
                Renewable energy technologies convert renewable resources, which can be fill up indefinitely, into electric or heat energy with diminished carbon emissions contrasted with traditional energy (conventional energy) sources
                Wind power, sunlight based photovoltaics, and limited scope hydroelectric generation have zero greenhouse gas emissions from generation. Solar photovoltaics is generally accessible and available at residential and farm scales Costs have dropped for even limited scope renewable energy and can give a good Levelized cost of energy when contrasted with grid-purchased electricity and help with reliability issues.',
                </p>
            ],
            date:'Jan 25 2023',
            category:'Energy',
            primaryimg:images.project2,
        },
        {
            id:3,
            title:'4 BEST QUESTIONS TO ASK YOUR BUILDING ENERGY CONSULTANT',
            shortdesc:'Description: In this article, we will look, at which questions you should ask your building energy consultant. From general stores to big factories and buildings, companies are effectively searching for ways of saving energy to be more productive and have more command over their costs.',
            longdesc:[
                <p style={{padding:'20px 0'}}>
                New technologies and practices for on-farm energy management is improving the producers economic and enable environmental sustainability in agriculture. When seeing energy use, you ought to add energy bills, submeters, and assessments.
                <br/>
                SUBMETER<br/>
                A submeter is an electricity or we can say a gas meter that is completely installed downstream of the main utility meter. They can be utilized to distinguish the energy use of a particular region. Submeters are valuable for gathering energy use design data.They can be utilized to follow utilization as detailed as a load-by-load basis. Submeters are accessible for power, petroleum gas, water, and fuel.
                ENERGY BILLS<br/>
                Monitoring your month -to- month energy utilization expenses can give a gauge of the expense of production and identify trends or problems.
                ENERGY EFFICIENCY<br/>
                Energy productivity is accomplishing a similar work with less energy. An obvious way to improve efficiency is to replace older powered equipment with higher efficiency equipment at the end of its service life. Occasionally it makes economic sense to replace equipment sooner depending on the sort of hardware, cost of fuel, day by day and yearly run-times, and the degree of efficiency.
                Important areas for energy efficiency include:
                <ol style={{padding:'20px'}}>
                    <li>lighting</li>
                    <li>heating</li>
                    <li>refrigeration</li>
                    <li>waterers</li>
                    <li>variable frequency drives (especially for irrigation)</li>
                    <li>controllers</li>
                    <li>grain dryer</li>
                    <li>combined heat and power</li>
                    <li>RENEWABLE ENERGY</li>
                </ol>                
                Renewable energy technologies convert renewable resources, which can be fill up indefinitely, into electric or heat energy with diminished carbon emissions contrasted with traditional energy (conventional energy) sources
                Wind power, sunlight based photovoltaics, and limited scope hydroelectric generation have zero greenhouse gas emissions from generation. Solar photovoltaics is generally accessible and available at residential and farm scales Costs have dropped for even limited scope renewable energy and can give a good Levelized cost of energy when contrasted with grid-purchased electricity and help with reliability issues.',
                </p>
            ],
            date:'Jan 25 2023',
            category:'Energy',
            primaryimg:images.project3,
        },
        {
            id:4,
            title:'4 BEST QUESTIONS TO ASK YOUR BUILDING ENERGY CONSULTANT',
            shortdesc:'Description: In this article, we will look, at which questions you should ask your building energy consultant. From general stores to big factories and buildings, companies are effectively searching for ways of saving energy to be more productive and have more command over their costs.',
            longdesc:[
                <p style={{padding:'20px 0'}}>
                New technologies and practices for on-farm energy management is improving the producers economic and enable environmental sustainability in agriculture. When seeing energy use, you ought to add energy bills, submeters, and assessments.
                <br/>
                SUBMETER<br/>
                A submeter is an electricity or we can say a gas meter that is completely installed downstream of the main utility meter. They can be utilized to distinguish the energy use of a particular region. Submeters are valuable for gathering energy use design data.They can be utilized to follow utilization as detailed as a load-by-load basis. Submeters are accessible for power, petroleum gas, water, and fuel.
                ENERGY BILLS<br/>
                Monitoring your month -to- month energy utilization expenses can give a gauge of the expense of production and identify trends or problems.
                ENERGY EFFICIENCY<br/>
                Energy productivity is accomplishing a similar work with less energy. An obvious way to improve efficiency is to replace older powered equipment with higher efficiency equipment at the end of its service life. Occasionally it makes economic sense to replace equipment sooner depending on the sort of hardware, cost of fuel, day by day and yearly run-times, and the degree of efficiency.
                Important areas for energy efficiency include:
                <ol style={{padding:'20px'}}>
                    <li>lighting</li>
                    <li>heating</li>
                    <li>refrigeration</li>
                    <li>waterers</li>
                    <li>variable frequency drives (especially for irrigation)</li>
                    <li>controllers</li>
                    <li>grain dryer</li>
                    <li>combined heat and power</li>
                    <li>RENEWABLE ENERGY</li>
                </ol>                
                Renewable energy technologies convert renewable resources, which can be fill up indefinitely, into electric or heat energy with diminished carbon emissions contrasted with traditional energy (conventional energy) sources
                Wind power, sunlight based photovoltaics, and limited scope hydroelectric generation have zero greenhouse gas emissions from generation. Solar photovoltaics is generally accessible and available at residential and farm scales Costs have dropped for even limited scope renewable energy and can give a good Levelized cost of energy when contrasted with grid-purchased electricity and help with reliability issues.',
                </p>
            ],
            date:'Jan 25 2023',
            category:'Energy',
            primaryimg:images.project4,
        },
    ]

    const [expandedPosts, setExpandedPosts] = useState([]);

    const togglePostExpansion = (postId) => {
        setExpandedPosts(prevExpanded => 
        prevExpanded.includes(postId)
            ? prevExpanded.filter(id => id !== postId)
            : [...prevExpanded, postId]
        );
    };

    return(
        <>
        <Banner banner={images.blogbanner} title="Blogs" text="Lorem ipsum dolor sit amet consectetur. Tristique tellus odio ullamcorper semper sed aliquam."/>
        <section className="blog-container">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
                    {posts.map(post => (
                        <BlogPost 
                            key={post.id} 
                            id={post.id}
                            title={post.title} 
                            shortdesc={post.shortdesc}
                            longdesc={post.longdesc}
                            date={post.date}
                            primaryimg={post.primaryimg}
                            category={post.category}
                            isExpanded={expandedPosts.includes(post.id)}
                            onToggle={togglePostExpansion}
                        />
                    ))}    
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                        <Newsletter subtitle="Subscribe to newsletter"/>
                        <div className="social-icons sidebarbox">
                            <span>Follow us on </span>
                            <hr />
                            <div className="d-flex ">
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
                        <div className="latestposts sidebarbox">
                            <span>Latest Post</span>
                            <hr />
                            <div className="row">
                                <div className="col-5">
                                    <img src={images.blogimg1} alt="" width="100%"/>
                                </div>
                                <div className="col-7 no-padding">
                                    <p>Right collaboration to save earth</p>
                                    <span>JAN 25 2022</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <img src={images.blogimg2} alt="" width="100%"/>
                                </div>
                                <div className="col-7 no-padding">
                                    <p>Powering the Energy Generation</p>
                                    <span>JAN 25 2022</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <img src={images.blogimg3} alt="" width="100%"/>
                                </div>
                                <div className="col-7 no-padding">
                                    <p>How efficient is eco system world</p>
                                    <span>JAN 25 2022</span>
                                </div>
                            </div>                            
                        </div>
                        <div className="categories sidebarbox">
                            <span>browse by category</span>
                            <ul>
                                <li>
                                    <div style={{display:'grid' ,gridTemplateColumns:`70% 30%`}}>
                                        <div>Eco  System</div>
                                        <div style={{textAlign:'right'}}>(9)</div>
                                    </div>
                                </li>
                                <li>
                                    <div style={{display:'grid' ,gridTemplateColumns:`70% 30%`}}>
                                        <div>Energy Generation</div>
                                        <div style={{textAlign:'right'}}>(1)</div>
                                    </div>                                    
                                </li>
                                <li>
                                    <div style={{display:'grid' ,gridTemplateColumns:`70% 30%`}}>
                                        <div>Solar Energy </div>
                                        <div style={{textAlign:'right'}}>(6)</div>
                                    </div>                                  
                                </li>
                                <li>
                                    <div style={{display:'grid' ,gridTemplateColumns:`70% 30%`}}>
                                        <div> Water turbines</div>
                                        <div style={{textAlign:'right'}}>(3)</div>
                                    </div>                                    
                                </li>
                            </ul>                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

