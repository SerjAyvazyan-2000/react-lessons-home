import React, {useState} from "react";
import "./index.scss"
import Components from "./coponents";

const AddBoxes = () => {
    const [numbering , setNumbering] = useState([])

   const handleClick = () => {
        let number = Math.floor(Math.random() * 100)
       setNumbering([...numbering,number])
    }

    const deleteBox = (index) =>{
        if(numbering.indexOf(index)){
            numbering.splice(index,1)
        }
        setNumbering(numbering)
    }
    return <div className="add-boxes">
        <h1 onClick={deleteBox}>Welqom to Add Boxes</h1>
        <button onClick={handleClick} >Add Box</button>
        <div className="p-boxes-content">
            {numbering.length?numbering.map((item,index)=>{
                return <Components delete={()=>deleteBox(index)}  number = {item} box = {item} key = {index}/>
            }) :null}
        </div>

    </div>
}
export default AddBoxes