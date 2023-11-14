import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { user } = store;
  const location = useLocation()
  const navigate = useNavigate();
  const defaultUserImg = "https://images.squarespace-cdn.com/content/v1/5e6cfa89c315535aba12ee9d/1620070500897-0BUOX95Q8M9ZB3WQQPPR/Logo+-+Einstein+%282%29.png";
  const [userImg, setUserImg] = useState(user ? user.img : defaultUserImg);

  const [navActive, setNavActive] = useState(null)

  const shouldHide = !navActive; // Ocultar cuando la barra no esté desplegada

  useEffect(() => {
    setNavActive(location.pathname)
    if (user) {
      setUserImg(user.img || defaultUserImg)
    } else {
      setUserImg(defaultUserImg);

    }

  }, [location.pathname, user, store.user]);

  const [checked, setChecked] = useState(true)
  const [checkedTwo, setCheckedTwo] = useState(false)
  const toggleLogOut = (active) => {
    setChecked(active)
    if (active === true) {
      setCheckedTwo(false)
    }
  }

  useEffect(() => {
    // console.log(location)
  if(location.pathname == '/changepassword'){
      
      return
    }

  if(!store.token) {
      navigate("/")

    }
  }, [store.token])


  const handleLogout = async (e) => {
    e.preventDefault();
    console.log("Handle logout called");
    actions.logout();



  };


  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const defaultNavbar = (
    
<nav className="navbar  navbar-expand-lg bg-black navbardefault">
  <div className="container-fluid container-nav  ">
    <Link to={'/'} className="navbar-brand  d-flex align-items-center logo-text">CM_</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav  align-items-center">
        <li className="nav-item mx-3">
          <a href="#roadmap-section" className="nav-link-item">Road Map</a>
        </li>
        <li className="nav-item">
          <Link to={'/aboutus'} className="nav-link-item">About us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )

  const userNavbar = ( 
<nav className="navbar  navbar-expand-lg navbar-light  navbardefault">
  <div className="container-fluid container-nav">
    <Link to={'/'} className="navbar-brand d-flex align-items-center">NameProject</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav  align-items-center  ">
        <li className="nav-item">
          <Link to={'/progress'} className="nav-link-item">My Progress</Link>
        </li>
        <li className="nav-item">
          <Link to={'/roadmap'} className="nav-link-item">Road Map</Link>
        </li>
        <li className="nav-item">
          <Link to={'/aboutus'} className="nav-link-item">About us</Link>
        </li>
        <li className="nav-item">
          <Link to={'/profile'} className="nav-link"><img src={userImg} className="nav-user-img" alt="User" /></Link>
        </li>
        <li className="nav-item">
        <Link to={('/')} onClick={handleLogout} className="nav-link-item"><i class="fa-solid fa-right-from-bracket"></i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

)



  const teacherNavbar = (
<nav className="navbar  navbar-expand-lg navbar-light  navbardefault">
  <div className="container-fluid container-nav">
    <Link to={'/'} className="navbar-brand d-flex align-items-center">NameProject</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav  align-items-center  ">
        <li className="nav-item">
          <Link to={'/progress'} className="nav-link-item">Students</Link>
        </li>
        <li className="nav-item">
          <Link to={'/roadmap'} className="nav-link-item">Road Map</Link>
        </li>
        <li className="nav-item">
          <Link to={'/aboutus'} className="nav-link-item">About us</Link>
        </li>
        <li className="nav-item">
          <Link to={'/profile'} className="nav-link"><img src={userImg} className="nav-user-img" alt="User" /></Link>
        </li>
        <li className="nav-item">
        <Link to={('/')} onClick={handleLogout} className="nav-link-item"><i class="fa-solid fa-right-from-bracket"></i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )


  const renderNavbarBasedOnRole = () => {
    if (['/registro', '/', '/login', '/forwotpassword', '/sendpassword', '/changepassword'].includes(navActive)) {
      return defaultNavbar;
    }else if (user && user.role === 'alumno') {
      return userNavbar;
    }else if (user && user.role === 'teacher') {
      return teacherNavbar;
    }
  };

  return (
    <>
      {renderNavbarBasedOnRole()}
    </>
  );
};
