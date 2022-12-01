import React, {useState} from "react";
import "./index.scss"

const Couplecolor = () => {
    let [number , setNumber] = useState('')
    let [number1 , setNumber1] = useState('')
    let [numberList , setNumberList] = useState([])




    const hendlOnchenge = (e) =>{
      setNumber(e.target.value)

   }
  const hendleClick = () => {
      for( number1; number1<= number;number1++){
          setNumber1(number1)
          numberList.push(number1)
          setNumberList(numberList)
      }
  }

    return <div className="p-couple-color">
            <h1>Lesson 4</h1>
        <div className="couple-tools">
        <input onChange={hendlOnchenge}  type="number" placeholder="Search Number..."/>
        <button onClick={hendleClick}>Submit</button>
      </div>
        <div className="result-couple">
            { numberList.map((item,index)=>{
               return item % 2 === 0 ? <h1 style={{color:'red'}}>{item}</h1> : <h1>{item}</h1>
            }) }
        </div>
    </div>
}
export default Couplecolor