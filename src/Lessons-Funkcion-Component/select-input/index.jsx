import React, {useState} from "react";
import "./index.scss"

const SelectInput = () => {
    const [inputValue , setInputName] = useState('')

const selektInfo = [
    {name:"BMW-E60 LEGENDARY"},
    {name:"Mersedes-Benz 124 7.1 LEGENDARY"},
    {name:"Mersedes-Benz E-350 212 "},
    {name:"Mersedes-Benz E-320 211 "},
]
   const  hendlOnchenge = (e) => {
         setInputName(e.target.value)
   }

    return <div className="select-input">
         <h1>Lessons 6</h1>
        <input type="text" value={inputValue}  placeholder="Select value"/>
        <div className="select-box">
            <select onChange={hendlOnchenge} name="" id="">
                {selektInfo.map((item,index) =>{
                     return <option key={index}>{item.name}</option>
                })}
            </select>
        </div>
    </div>
}
export default SelectInput