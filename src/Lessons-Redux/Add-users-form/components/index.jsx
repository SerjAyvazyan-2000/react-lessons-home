import React, {useState} from "react";
import "./index.scss"

import Modal from "./modal-box";


const Components = ({item,index}) => {
    const [openModal , setOpenModal] = useState(false)


    const handleModal = () =>{
        setOpenModal(!openModal)

    }

    return <div className="users-info">
          <h1>USER</h1>
         <h2>Firstname  <span style={{color:"red",fontSize:"30px"}}>{item.firstName}</span></h2>
        <h2>Lastname  <span style={{color:"red",fontSize:"30px"}}>{item.lastName}</span></h2>
        <h2>Email  <span style={{color:"red",fontSize:"30px"}}>{item.email}</span></h2>
        <h2>Password   <span style={{color:"red",fontSize:"30px"}}>{item.password}</span></h2>
        <h2>ConfilmPassword  <span style={{color:"red",fontSize:"30px"}}>{item.confilmPassword}</span></h2>
        <h2>PhoneNumber  <span style={{color:"red",fontSize:"30px"}}>{item.phoneNumber}</span></h2>
        <button onClick={handleModal}>Delete User</button>
        {openModal ? <Modal openClose = {handleModal}  info = {item} index = {index}/> :null}
    </div>
}
export default Components