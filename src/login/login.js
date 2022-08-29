import React, { useContext, useEffect, useState } from 'react';
import "./style/style.scss";

import { Login_Create_Context } from '../context-api/context-authntication';
import {motion} from "framer-motion"
import { useNavigate } from 'react-router';

function Login() {
    const login_create=useContext(Login_Create_Context);
    const [state,setstate]=useState(false)

    const Data_Login=(e)=>{
        e.preventDefault();
        let UserName=e.currentTarget.Username.value;
        let Password=e.currentTarget.Password.value;
        login_create.setUserName_Password({UserName:UserName,Password:Password})
        if(window.location.href){
            setstate(true)
        }
    }




  return (
    <div className='login-container'>
        <div className="center">
            <h1>Login</h1>
            <form method="post" onSubmit={Data_Login}>
                <div className="txt_field">
                    <input type="text" required name='Username'/>
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                    <input type="password" required name='Password'/>
                    <span></span>
                    <label>Password</label>
                </div>
                <input type="submit" value="Login" style={{marginBottom:"50px"}}/>
            </form>
            {state?<motion.p style={{width:"190px",marginLeft:"auto",marginRight:"auto",marginBottom:"15px",color:"red" }}>Error Email Or Password</motion.p>:<></>}
        </div>

      
    </div>
  )
}

export default Login
