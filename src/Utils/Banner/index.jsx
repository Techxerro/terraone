import React from "react";
import './index.scss'

export const Banner = (props) =>{
    return(
        <>
        <section className="banner d-flex align-items-center" style={{backgroundImage:`url(${props.banner})`}}>
            <div className="container">
                <div className="row ">
                    <div className="col-12">
                        <h2 data-aos="fade-down">{props.title}</h2>
                        <p data-aos="fade-up">{props.text}</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}