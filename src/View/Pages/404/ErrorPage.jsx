import React from "react";

const ErrorPage = () =>{
    return(

        <>
        <div className="container-fluid" style={{background:'#ADCC49',color:'#fff'}} >
            <div className="row d-flex justify-content-center align-items-center" style={{height:'100dvh'}}>
                <div className="col-10 text-center">
                    <p style={{fontSize:'30px'}}>Error 404</p>
                    <h2 style={{fontSize:'100px'}}>Page Not Found</h2>
                    <a href="/" style={{color:'#fff'}}>Home page</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default ErrorPage;