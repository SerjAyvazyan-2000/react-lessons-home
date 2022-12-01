 import React, {useState} from "react";
import "./index.scss"

  const LessonAddName = () =>{
     const [erorText,setErorText] = useState()
    const[inputValue,setInputValue] = useState('')
    const [name,setName] = useState([])

     const hendlOnchenge = (e) =>{
       setInputValue(e.target.value)
      }

      const hendlClick = () => {

             setName([...name,inputValue])
             setInputValue('')

      }

    return <div className="lesson-1">
        <h1>Lesson 1</h1>
        <div className="lesson-1-detals">
            <input onChange={hendlOnchenge} value={inputValue} type="text" placeholder="Search Name..."/>
             <button onClick={hendlClick}>Submit</button>
        </div>
         <div className="result-block">
              <div className="group-list">
                   <h2>Group.1</h2>
                  {name.map((item,index) =>{
                       return index % 2 === 0?<p key={index}>{item}</p> : null
                  })}
              </div>
             <div className="group-list">
                 <h2>Group.2</h2>
                 {name.map((item,index) =>{
                     return index % 2 !==0 ?<p key={index}>{item}</p>:null
                 })}
             </div>

         </div>
    </div>
 }
 export default LessonAddName
