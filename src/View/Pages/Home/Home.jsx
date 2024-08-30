import React from "react";
import HeroSlider from "../../../Component/HeroSlider/HeroSlider";
import ServiceSlider from "../../../Component/Services/ServiceSlider";
import WhyTerraone from "../../../Component/WhyTerraone/WhyTerraone";
import Whoarewe from "../../../Component/Whoarewe/Whoarewe";
import Projects from "../../../Component/Projects/Projects";
import OurPortfolio from "../../../Component/OurPortfolio/OurPortfolio";
import BlogSection from "../../../Component/BlogSection/BlogSection";

const Home = () =>{
    return(
        <>
            <HeroSlider/>
            <ServiceSlider/>
            <WhyTerraone/>
            <Whoarewe/>
            <Projects/>
            <OurPortfolio/>
            <BlogSection/>
        </>
    )
}

export default Home;