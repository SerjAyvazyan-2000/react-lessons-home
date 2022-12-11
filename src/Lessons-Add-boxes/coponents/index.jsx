import React, {useEffect, useState} from "react";
import "./index.scss"
import Modal from "./delete-modal";

const Components = ({box,number},props) => {
    const [modal, setModal] = useState(false)

   const openModal = () => {
         setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
   const hendleDelete = () => {

       closeModal()
   }

    return <div className="p-boxes">{box}

        <button onClick={openModal}>Delete</button>
        {modal?<Modal delete={hendleDelete} number = {number} closModal={closeModal}/> : null}
    </div>
}
export default Components