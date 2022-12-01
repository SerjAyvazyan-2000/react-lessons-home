import React, {useState} from "react";
import "./index.scss"

const FontSize = () => {
    const [openTeg,setOpenTeg] = useState(false)
    const [name ,setName] = useState('')
    const [fontSize,setFontSize] = useState(30)

    const hendlClick = () => {
        setOpenTeg(true)
         if(openTeg && name) {
            setFontSize(fontSize+2)
         }


    }
    const hendlOnchenge = (e) => {
        setName(e.target.value)
    }
    return <div className="p-Font-size-box">
        <h1>Lesson 2</h1>
        <input onChange={hendlOnchenge} value={name}  type="text" placeholder="Search Name..."/>
        <button onClick={hendlClick}>Submit</button>
        <div className="info-box">
            {openTeg ? <h1 style={{fontSize:fontSize < 70? fontSize + "px" : null}}>{name}</h1> : null}

        </div>
    </div>
}
export default FontSize