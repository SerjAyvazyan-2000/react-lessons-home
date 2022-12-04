import React from "react";
import "./index.scss"

const Modal = (props) =>{

    return <div className="modal-block">
        <div className="modal-bg" onClick={props.closModal}></div>
        <div className="modal-content">
         <h1>Do you want Delete Box--{props.number}?</h1>
            <button onClick={props.delete}>Yes</button>
            <button onClick={props.closModal}>No</button>
        </div>

    </div>
}
export default Modal