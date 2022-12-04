import React, {useEffect, useRef, useState} from "react";
import "./index.scss"

const ButtonInfo = () => {
    let buttonRef = useRef()
    const [left,setLeft] = useState()
    const [top,setTop] = useState()


 const buttonStyle = () => {
     let randomStyle = Math.random() *255
     if(buttonRef.current){
         buttonRef.current.style.left = randomStyle + "px"
         buttonRef.current.style.top = randomStyle + "px"
     }
    }

    useEffect(()=>{
        buttonStyle()
        setLeft(buttonRef.current.offsetLeft)
        setTop(buttonRef.current.offsetTop)
        // let randomStyle = Math.random() *255
        // if(buttonRef.current){
        //     buttonRef.current.style.left = randomStyle + "px"
        //     buttonRef.current.style.top = randomStyle + "px"
        // }

        // let width = buttonRef.current.offsetWidth
        // let height = buttonRef.current.offsetHeight

    },[])


  const  hendlClick = () =>{
      setLeft(buttonRef.current.offsetLeft)
      setTop(buttonRef.current.offsetTop)
  }

    return <div className="btn-info">
         <h1>Lessson 2</h1>
        <h1 >Button Left {left}</h1>
        <h1>Button Top {top}</h1>

        <button ref={buttonRef} onClick={hendlClick}>Sumbit Info</button>
    </div>
}
export default ButtonInfo