import React, {useEffect, useState} from "react";
import "./index.scss"
import Components from "./components";
import img from "../../../src/assets/image/1.jpeg"
import img1 from "../../assets/image/2.jpeg"
import img2 from "../../assets/image/3.jpeg"
import img3 from "../../assets/image/4.jpeg"
import img4 from "../../assets/image/6.jpeg"
import img5 from "../../assets/image/7.jpeg"


const ReanderBoxes = () => {
    const [loader , setLoader]  = useState(false)
    const [boxes , setBoxes] = useState([
        {info:"Produmkt is not to Emrti"},
        {info:"Produmkt is not to Emrti"},
        {info:"Produmkt is not to Emrti"},
        {info:"Produmkt is not to Emrti"},
        {info:"Produmkt is not to Emrti"},
        {info:"Produmkt is not to Emrti"}
    ])

// Senc uxaki ramkeqnem nkarum...
    useEffect(() =>{
        // setLoader(true)
         setInterval(()=>{
             setBoxes([
                 {info:img,id:1},
                 {info:img1,id:2},
                 {info:img2,id:3},
                 {info:img3,id:4},
                 {info:img4,id:5},
                 {info:img5,id:6}
             ])
         },3000)
    },[])

 // useEffect(() =>{
 //     if(boxes.id){
 //          setLoader(false)
 //     }
 //
 // },[boxes])
 //    SENC LOADER BARNEM NKARUM


    return <div className="P-render-boxes">
         <h1>Lessons 2</h1>
        <h1>E60 M5 LEGENDARY</h1>
        <div className="p-boxes-block">
            { boxes.length? boxes.map((item,index) =>{
              return <Components key={index} item = {item}/>
            }): <h2>Loading</h2>}
        </div>
    </div>
}
export default ReanderBoxes