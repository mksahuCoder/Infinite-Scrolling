

import React , { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../css/Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();

    const loginPage = () => {
        navigate("/login");
    }

    const logoutPage = () => {
        localStorage.removeItem("username");
        navigate("/login");
    }

    const [isMobile, setIsMobile] = useState(false);
  return (
    <>

    <div className="m-Navbar">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="o-flex">
                        <div className="Logo">
                            <h1>Infinite Scrolling</h1>
                        </div>

                        <div className={isMobile ? 'hamberger-view' :'laptop-view'} onClick={() => setIsMobile(false)}>
                            
                            <div className="m-Nav">
                                <Link className='mm' to="/">Home</Link>
                                <Link className='mm' to="/about">About Us</Link>
                                <Link className='mm'>Contact Us</Link>
                                <Link className='mm'>Blog</Link>
                            </div>

                            <div className="button-sec">
                                {
                                    localStorage.getItem("username")?
                                    <span className="login-btn" onClick={logoutPage}>Logout</span> :
                                    <span className="login-btn" onClick={loginPage}>Login</span> 
                                }
                                
                               
                            </div>
                        </div>

                        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                            {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Navbar;
