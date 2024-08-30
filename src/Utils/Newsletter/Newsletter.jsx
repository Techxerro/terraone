import React from "react";
import './Newsletter.scss';

const Newsletter = (props) =>{
    return(
        <div className="newsletter">
            <h2>{props.title}</h2>
            <span>{props.subtitle}</span>
            <hr />
            <form>
                <input type="email" name="email" placeholder="Email" />
                <input type="submit" value="SUBSCRIBE" />
            </form>
        </div>
    )
}

export default Newsletter

