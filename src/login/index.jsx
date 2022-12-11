import React, {useEffect, useState} from "react";
import "./index.scss"
import {useDispatch, useSelector} from "react-redux";

const Login = () =>{
    const selector = useSelector(state => state.AddUsers.key)
   const dispatch = useDispatch()
    const [usersInfo , setUsersInfo] = useState({
         email:'',
         password:''
    })

  const handleChange = (e) =>{
          setUsersInfo({...usersInfo,[e.target.name]:e.target.value})
  }
  const handleClick = () =>{
        if(usersInfo.password && usersInfo.email){
            localStorage.setItem("password_Email" ,(usersInfo.password + usersInfo.email).toString())
            dispatch({type:"SET_KEY",payload:usersInfo.email + usersInfo.password})
        }


  }




    return <div className="login-section">
        <div className="p-login-block">
             <div className="block-name">
                  <h1>SIGN IN</h1>
             </div>

            <div className="login-block-tools">
                <label>
                    <h2>Email</h2>
                    <input onChange={handleChange} name="email" type="text" placeholder="Email"/>
                </label>
            </div>

            <div className="login-block-tools">
                <label>
                    <h2>Password</h2>
                    <input onChange={handleChange} name="password" type="text" placeholder="Password"/>
                </label>
            </div>
            <button onClick={handleClick}>SIGN IN</button>
        </div>

    </div>
}
export default Login