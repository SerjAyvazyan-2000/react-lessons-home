import React from "react";
import "./index.scss"
import {useDispatch} from "react-redux";

const Components = ({item,index}) => {
    const dispatch = useDispatch()

    const deleteUseer = (index) =>{
        dispatch({type:"DELETE_USER",payload:index})
    }

    return <div className="users-info">
          <h1>USER</h1>
         <h2>Firstname  <span style={{color:"red",fontSize:"30px"}}>{item.firstName}</span></h2>
        <h2>Lastname  <span style={{color:"red",fontSize:"30px"}}>{item.lastName}</span></h2>
        <h2>Email  <span style={{color:"red",fontSize:"30px"}}>{item.email}</span></h2>
        <h2>Password   <span style={{color:"red",fontSize:"30px"}}>{item.password}</span></h2>
        <h2>ConfilmPassword  <span style={{color:"red",fontSize:"30px"}}>{item.confilmPassword}</span></h2>
        <h2>PhoneNumber  <span style={{color:"red",fontSize:"30px"}}>{item.phoneNumber}</span></h2>
        <button onClick={()=>deleteUseer(index)}>Delete User</button>
    </div>
}
export default Components