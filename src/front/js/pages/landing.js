import React, { useContext, useState, useEffect } from "react";
import logoCM from "../../img/LOGO.png";
import "../../styles/index.css";
import { Login } from './login';
import { RoadMap } from './roadMap';
import { CourseDescrip } from '../component/courseDescrip';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import  codeimagen  from '../../img/codeimagen.png'
export const Landing = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
  
    const [landingRender, setLandingRender] = useState(null);

    useEffect(() => {
            if (store.token){
                navigate('/modules');
            }
                setLandingRender(landing);
   
    }, [navigate, actions]);

    const landing = (
        <div className='' id='login-section'>
            <div className='vh-100 mt-5'>
                <div className='container'>
                    <div className="row mt-3 pt-3 justify-content-between">
                        <div className="col-md-7 col-lg-3 col-xl-6 order-2 order-md-1">
                            <div className=" d-flex justify-content-center ">
                            <img src={codeimagen} alt="" className="img-code" />
                            </div>
                            <div className='d-flex justify-content-center text-black'>
                                <h4 className="text-black">
                                    <a href="" className="typewrite   ms-2" data-period="2000" data-type='[ "Learn the art of coding", "Enjoy the journey of learning", "Write code and discover", "Practice to master coding" ]'>
                                        <span className="wrap ms-3 text-black"></span>
                                    </a>
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-6 col-xl-6 order-1 order-md-2">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
            <div className='coursedesc bg-dark  pt-5 vh-100'>
                <CourseDescrip />
            </div>


            <div id="roadmap-section" className="p-5">

                <div  className="container col-md-8 col-lg-5 col-xl-4">
                    <RoadMap />
                </div>
            </div>
        </div>
    );

    return (
        <>{landingRender}</>
    );
};
