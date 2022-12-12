import React from "react";
 import "./index.scss"
import {useDispatch, useSelector} from "react-redux";
import AddRemoveCash from "../../components/store/combineRedusers/reducers";

const AddMoney  = () =>{
     const dispatch = useDispatch()
     const cashSelector = useSelector(state => state.AddRemoveCash.cash)

    const addMoney = (count) => {
           dispatch({type:"ADD_CASH" , payload:count})
    }

    const removeMoney = (count) => {
    dispatch({type:"REMOVE_CASH" , payload:count})
    }

     return <div className="lesson-create-cash">
         <h1>Add Money </h1>
         <div className="money-tools">
             <button onClick={()=>addMoney(Number(prompt("ADD CASH")))}>Add Money</button>
             <button onClick={()=>removeMoney(Number(prompt("REMOVE CASH")))}>Remove Money</button>
             <h1>Money   {cashSelector}$</h1>
         </div>

     </div>
}
export default AddMoney