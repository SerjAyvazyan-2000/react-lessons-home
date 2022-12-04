import React, {useRef, useState} from "react";
import "./index.scss"

const InputButtonConcat = () => {
     const [flag , setFlag] = useState(true)
    const inputRef = useRef(0)

  const handleFocus = () => {
        if(inputRef.current){
            inputRef.current.focus()
            if(flag){
                inputRef.current.style.border = "6px solid green"
                inputRef.current.value = "Active"
                setFlag(false)
            }if(!flag){
                inputRef.current.style.border = "6px solid red"
                inputRef.current.value = "Not Found"

                setFlag(true)
            }
        }
  }

    return <div className="leson-input-btn" onFocus={handleFocus}>
        <h1>Lessons 1</h1>
        <input ref={inputRef} type="text" placeholder="Click To Button.."/>
        <button onFocus={handleFocus}>Submit</button>

    </div>
}
export default InputButtonConcat