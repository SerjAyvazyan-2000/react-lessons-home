import React, {useEffect, useState} from "react";
import "./index.scss"

const InputValidacion = () => {
    const [number , setNumber] = useState('')
    const [erorNumber,setErorNumber] = useState('')


   const hendleChenge = (e) => {
          setNumber(e.target.value)

    }
    useEffect(() =>{
        if(number.length >10){
            setErorNumber('You have exceeded the number of Characters 10')
            setNumber('')
        }
    },[number])

    return <div className="p-input-validacion">
         <h1>Lesson 4</h1>
        <input className={`${erorNumber.length? "Number" : null}`} value={number} onChange={hendleChenge} type="number" placeholder="Search Number..."/>
        {erorNumber.length ? <h2>{erorNumber}</h2> : null}
    </div>
}
export default InputValidacion