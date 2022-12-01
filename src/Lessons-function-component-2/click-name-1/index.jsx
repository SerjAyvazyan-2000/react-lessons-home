import React, {useState} from "react";
import "./index.scss"

const NameOpen = () => {
    const [openTeg,setOpenTeg] = useState(false)
    const [name ,setName] = useState('')

   const hendlClick = (e) => {
          setOpenTeg(true)
        if(openTeg && name)  {
             setOpenTeg(false)
        }
        //  if (openTeg){
        //       setOpenTeg(false)
        //  }
    }
  const hendlOnchenge = (e) => {
      setName(e.target.value)

    }
    return <div className="p-modal-block">
         <h1>Lesson 1</h1>
        <input onChange={hendlOnchenge}  type="text" placeholder="Search Name..."/>
        <button onClick={hendlClick}>Submit</button>
        <div className="info-box">
            {openTeg && name?<h1>{name}</h1> :null}
            {/*myus tarberakov*/}
            {/*{openTeg ? <h1>Open</h1> : null}*/}
            {/*myus tarberakov*/}

        </div>
    </div>
}
export default NameOpen