import React from "react";
import "./index.scss"
import {useDispatch, useSelector} from "react-redux";

const Modal = ({info , index ,openClose}) =>{
    const selector = useSelector(state => state.AddUsers.usersList)
    const dispatch = useDispatch()

    const handleDelete = (index) => {
        dispatch({type:"DELETE_USER",payload:index})
         openClose()
    }

    return <div className="modal-block">
        <div onClick={openClose} className="modal-bg"></div>
        <div className="modal-content">
            <h1>Do you want Delete Box <span style={{color:"red"}}>{info.firstName}.?</span></h1>
            <button onClick={()=>handleDelete(index)} >Yes</button>
            <button onClick={openClose} >No</button>
        </div>

    </div>
}
export default Modal