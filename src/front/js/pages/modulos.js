import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ModalModule = ({ module }) => {
  return (
    <div className="modal fade" id={`exampleModal${module.id}`} tabindex="-1" aria-labelledby={`exampleModalLabel${module.id}`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-modal ">
          <div className="modal-header">
            <h1 className="modal-title sub-landing  fs-5" id={`exampleModalLabel${module.id}`}>{module.name}</h1>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className='second-desc text-white '>{module.description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
            <Link to={`/preguntas/${module.code}`}><button className="btn btn-outline-light rounded-pill py-2" data-bs-dismiss="modal">Start</button></Link>

          </div>
        </div>
      </div>
    </div>
  );
};

const LockedModal = () => {
  return (
    <div className="modal fade" id="lockedModal" tabIndex="-1" aria-labelledby="lockedModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-modal">
          <div className="modal-header">
            <h1 className="modal-title sub-landing fs-5" id="lockedModalLabel">Locked</h1>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body myModal-body">
            <p className="second-desc text-white">You lack the required experience to unlock this module.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Modulos = () => {
  const { store, actions } = useContext(Context);
  const [modules, setModules] = useState(store.modules);

  useEffect(() => {
    const fetchData = async () => {
      const res = await actions.getModules();
      if (res && res.modules) {
        setModules(res.modules);
      }
    };

    fetchData();
  }, []);

  return (<div className="mt-4">
    <div className="col text-center">
      <h2 className="module-title text-dark mb-4">
        Modules
      </h2>
    </div>

    <div className=" mt-2 mb-5">
      <h5 className="sub-landing-b pt-3 ms-4">Beginners:</h5>
      <div className="container-fluid py-2 d-flex flex-wrap justify-content-center titulo-info">
        {modules ? (
          modules.map((module) => (
            <div className="flip-card d-flex m-4 " key={module.id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={module.img} alt="Avatar" style={{ width: '150px', height: '150px' }} className="mt-2 mb-2 img-module-ex" data-bs-toggle="modal" data-bs-target={`#exampleModal${module.id}`} />
                  <div className="d-flex justify-content-evenly align-items-end mt-4">
                    <Link to={`/preguntas/${module.code}`} className="btn btn-outline-dark py-2 rounded-pill">Start</Link>
                  </div>
                </div>
                <ModalModule module={module} />
              </div>
            </div>
          ))
        ) : (
          <p>Loading modules...</p>
        )}
        
      </div>
      
    </div>
    <div>
    <div>
    <div className="bg-dark ">
      <h5 className="sub-landing pt-3 ms-4">Medium:</h5>
      <div className="container-fluid py-2 d-flex flex-wrap justify-content-center titulo-info">
        {modules ? (
          modules.map((module) => (
            <div className="flip-card d-flex m-4 " key={module.id}>
              <div className="flip-card-inner p-1">
                <div className="flip-card-front p-5">
                  

                <button className="btn btn-outline-light mt-5 rounded-pill btn-lock" data-bs-toggle="modal" data-bs-target="#lockedModal"><i className="fa-solid fa-lock "></i></button>
                  
                </div>
                <LockedModal />
              </div>
            </div>
          ))
        ) : (
          <p>Loading modules...</p>
        )}
        
      </div>
      
    </div>
    </div>

    </div>
  </div>
  );
};