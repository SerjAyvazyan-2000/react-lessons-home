import React, {useEffect, useState} from "react";
import "./index.scss"
import car from "../../assets/image/2.jpeg"
import car1 from "../../assets/image/3.jpeg"
import car2 from "../../assets/image/4.jpeg"

import Components from "./components";
import {bachgroundColor} from "../../components/utils";


const ModifierColor = () => {
  const [resultCars , setResultCars] = useState([])
    const [color , setColor] = useState('')

    let cars = [
        {name:"BMW E60 M5 LEGENDARY",img:car,id:1},
        {name:"BMW E60 4.2",img:car1,id:2},
        {name:"BMW E60 3.2",img:car2,id:3},

    ]

    // const bachgroundColor = () => {
    //    let a = Math.random() *300
    //     let b = Math.random() *300
    //     let c = Math.random() *300
    //     let bgColor =  a + "," + b + "," + c
    //     setColor(bgColor)
    // }
    useEffect(()=>{
      setColor(bachgroundColor())
    },[])

  const hendleClick = (carname) => {
      let newCars = cars.filter(el => el.name === carname)
      setResultCars(newCars[0])

  }
    return <div style={{backgroundColor:`rgba(${color})` }}  className="P-modifier-color">
          <h1>Lesson 1</h1>
         <div className="modifer-tools">
               <ul>
                    <li onClick={()=>hendleClick("BMW E60 M5 LEGENDARY")}>BMW E60 M5 LEGENDARY</li>
                    <li onClick={()=>hendleClick("BMW E60 4.2")}>BMW E60 4.2</li>
                   <li onClick={()=>hendleClick("BMW E60 3.2")}>BMW E60 3.2</li>


               </ul>
         </div>
         <div className="result-modifier">
             <Components info = {resultCars}/>
         </div>
    </div>
}
export default ModifierColor