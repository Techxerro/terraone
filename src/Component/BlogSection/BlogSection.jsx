import React from "react";
import './BlogSection.scss';
import { images } from "../../Assets/images";

const BlogSection = () =>{
    return(
        <>
        <section className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-12 col-sm-12 col-12">
                        <div className="title text-left">
                            <h5 data-aos="fade-right" data-aos-delay="100" >Article</h5>
                            <hr data-aos="fade-right" data-aos-delay="200" />
                            <h2 data-aos="fade-right" data-aos-delay="100" >Our Latest Blogs</h2>
                        </div>

                        <div className="blog-featured-section">
                            <div className="blog-featured" data-aos="fade-right" data-aos-delay="200">
                                <div className="blog-content" data-aos="fade-right" data-aos-delay="600">
                                    <div className="d-flex">
                                        <span>December 10,2023</span>
                                        <span>Energy</span>
                                    </div>
                                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                    <hr />
                                    <p>Lorem ipsum dolor sit amet consectetur. Sociis neque eget vitae nec ligula. Blandit cras cursus ac auctor proin quam in vel vitae. </p>
                                </div>
                            </div>
                            <button className="btn hide-mob"><a href="/blogs">All Articles</a></button>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-12 col-sm-12 col-12 all-blog">
                        <div className="blog-wrapper" data-aos="fade-up">
                            <div className="row">
                                <div className="col-xl-5 col-lg-12 col-12">
                                    <img src={images.blogimg1} alt="" loading="lazy" />
                                </div>
                                <div className="col-xl-7 col-lg-12 col-12">
                                    <div className="blog-content">
                                        <div className="d-flex">
                                            <span>December 10,2023</span>
                                            <span>Energy</span>
                                        </div>
                                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                        <hr />
                                        <p>Lorem ipsum dolor sit amet consectetur. Sociis neque eget vitae nec ligula. Blandit cras cursus ac auctor proin quam in vel vitae. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-wrapper" data-aos="fade-up">
                            <div className="row">
                                <div className="col-xl-5 col-lg-12 col-12">
                                    <img src={images.blogimg2} alt=""  loading="lazy"/>
                                </div>
                                <div className="col-xl-7 col-lg-12 col-12">
                                    <div className="blog-content">
                                        <div className="d-flex">
                                            <span>December 10,2023</span>
                                            <span>Energy</span>
                                        </div>
                                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                        <hr />
                                        <p>Lorem ipsum dolor sit amet consectetur. Sociis neque eget vitae nec ligula. Blandit cras cursus ac auctor proin quam in vel vitae. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-wrapper" data-aos="fade-up">
                            <div className="row">
                                <div className="col-xl-5 col-lg-12 col-12">
                                    <img src={images.blogimg3} alt=""  loading="lazy"/>
                                </div>
                                <div className="col-xl-7 col-lg-12 col-12">
                                    <div className="blog-content">
                                        <div className="d-flex">
                                            <span>December 10,2023</span>
                                            <span>Energy</span>
                                        </div>
                                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                        <hr />
                                        <p>Lorem ipsum dolor sit amet consectetur. Sociis neque eget vitae nec ligula. Blandit cras cursus ac auctor proin quam in vel vitae. </p>
                                    </div>
                                </div>
                                <div className="col-12">                                    
                                        <button className="btn hide-desktop"><a href="/blogs">All Articles</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default BlogSection;