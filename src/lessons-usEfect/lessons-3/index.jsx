import React, {useEffect, useState} from "react";
import "./index.scss"
import img1 from "../../assets/image/2.jpeg"

const NumberImage = () => {
    let [number , setNumber] = useState(0)

 useEffect(() =>{
     let newNumber = Math.floor(Math.random()* 1000)
      setNumber(newNumber)
 },[])
    return <div className="number-image-block">
        <h1>Lesson 3</h1>
         <div className="p-result-boxes">
             {number > 500 ? <div className="p-result-image" style={{backgroundImage:`url(${img1})`}}>
                 Number of Roles {number}</div> : <h2>Write a Number Again  {number}</h2>}
         </div>

    </div>
}
export default NumberImage