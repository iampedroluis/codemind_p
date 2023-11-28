import React, { useContext, useState, useEffect } from "react";
import logoCM from "../../img/LOGO.png";
import "../../styles/index.css";
import { Login } from './login';
import { RoadMap } from './roadMap';
import { CourseDescrip } from '../component/courseDescrip';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import  codeimagen  from '../../img/codeimagen.png'
import { ModulosLanding } from "./modulosLanding";
import modulesimg from "../../img/modulesimg.png"

export const Landing = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
  
    const [landingRender, setLandingRender] = useState(null);
    const scrolltop =() =>{window.scrollTo(0, 0);} 
    useEffect(() => {
            if (store.token){
                navigate('/modules');
            }
                setLandingRender(landing);
   
    }, [navigate, actions]);

    const landing = (
        <div className='' id='login-section mt-5  '>
            <div className='mt-5'>
                <div className='container mb-5'>
                    <div className="row mt-3 pt-3 justify-content-between align-items-center d-flex flex-column flex-md-row">
                        <div className="col-md-7 col-lg-3 col-xl-6 order-2 order-md-1 d-flex flex-column align-items-center align-items-md-start">
                            <div className=" d-flex justify-content-center mb-4">
                            <img src={ modulesimg } alt="" className="img-code " />
                            </div>
                            <div className='d-flex justify-content-center text-black '>
                                <h4 className="text-black">
                                    <a href="" className="typewrite   ms-2" data-period="2000" data-type='[ "Learn the art of coding", "Enjoy the journey of learning", "Write code and discover", "Practice to master coding" ]'>
                                        <span className="wrap ms-3 text-black"></span>
                                    </a>
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-6 col-xl-6 order-1 order-md-2 d-flex align-items-center justify-content-center">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
            <div className='coursedesc bg-dark  pb-5'>
                <CourseDescrip />
            </div >
            <div className='coursedesc bg-dark  mb-4 vh-100'>
            <ModulosLanding></ModulosLanding>
            </div>

            <div id="roadmap-section" className="p-5">

                <div  className="container col-md-8 col-lg-5 col-xl-4">
                    <RoadMap />
                </div>
            </div>
            <a onClick={scrolltop}><i class="fa-solid fa-angle-up text-center d-flex  justify-content-center "></i></a>
            
        </div>
    );

    return (
        <>{landingRender}</>
    );
};
