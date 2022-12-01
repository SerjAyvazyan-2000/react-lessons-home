import React, {useState} from "react";
import "./index.scss"

const EvenOddNumber = () => {

    const [inputValue, setInputValue] = useState('')
    const [valueList , setValueList] = useState([])


   const hendlChenge = (e) => {
        setInputValue(e.target.value)
   }
   const hendlClick = () => {
        setValueList([...valueList,inputValue])
        setInputValue('')
   }

    return <div className="even-odd-box">
          <h1>Lesson 2</h1>
         <div className="even-odd-detals">
             <input value={inputValue} onChange={hendlChenge} type="number" placeholder="Search Number..."/>
             <button onClick={hendlClick}>Submit</button>
         </div>
        <div className="even-odd-boxes">
             <div className="numbers-box">
                  <h2>Even Number</h2>
                 {valueList.length?valueList.map((item,index) =>{
                      return item % 2===0 ? <p>{item}</p> :null
                 }) :null}
             </div>

            <div className="numbers-box">
                <h2>Odd Number</h2>
                {valueList.length?valueList.map((item,index) =>{
                    return item % 2!==0 ? <p>{item}</p> :null
                }) :null}

            </div>
        </div>
    </div>
}

export default EvenOddNumber