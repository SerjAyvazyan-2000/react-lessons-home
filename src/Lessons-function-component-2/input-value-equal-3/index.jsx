import React, {useState} from "react";
import "./index.scss"

const EqualInput = () => {
    const [redBorder , setRedborder] = useState(false)
    const [grenBorder , setGrenBorder] = useState(false)
    const [inputValue , setInputValue] = useState({
         text1:'',text:''
    })


    const hendlClick = () => {
       if(inputValue.text1 === inputValue.text){
           setGrenBorder(true)
           setRedborder(false)
       }else{
            setRedborder(true)
            setGrenBorder(false)
       }
   }

  const  hendlOnchenge = (event) => {
       setInputValue({...inputValue,[event.target.name]: event.target.value})
  }

    return <div className="p-equal-input">
           <h1>Lesson 3</h1>
         <div className="equal-tools">
             <input className={`${grenBorder ? "gren" : redBorder ? "red" : null }`} name="text" onChange={hendlOnchenge} type="text" placeholder="Search Text..."/>
             <input   className={`${grenBorder? "gren" :redBorder ? "red" : null}`} name="text1" onChange={hendlOnchenge} type="text" placeholder="Search Text 1..."/>
             <button onClick={hendlClick}>Submit</button>
         </div>
    </div>
}
export default EqualInput