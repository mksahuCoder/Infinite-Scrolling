

import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import "../css/LogIn.css";

const LogIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const SubmitForm = () => {

        if(username === "foo"  && password === "bar"){
            alert(" Login Successful")
            navigate("/")

            localStorage.setItem("username","foo")
        }else{
            alert("Wrong Username or Password")
        }
    }

  return (
    <>

    <div className="m-login">
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <div className="login-form">
                        <form action="">
                            <center>
                                <h1>Login Form</h1>
                            </center>
                            <label htmlFor="">Username*</label> <br />
                            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Username'/> <br />
                            <label htmlFor="">Password*</label> <br />
                            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'/> <br />
                            <center>
                            <span className='submit-button' onClick={SubmitForm}>Submit</span>
                            </center>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default LogIn;
