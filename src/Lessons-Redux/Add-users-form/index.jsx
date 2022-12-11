import React, {useState} from "react";
import "./index.scss"
import {useDispatch, useSelector} from "react-redux";
import Components from "./components";

const AddUsers = () =>{
    const selectorList = useSelector(state => state.AddUsers.usersList)

    const dispatch = useDispatch()

const [userData,setUserData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confilmPassword:'',
    phoneNumber:''
})
    const [erorText , setErorText] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confilmPassword:'',
        phoneNumber:''
    })

    const handleClick = () =>{
        let erorString = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confilmPassword:'',
            phoneNumber:''
        }
        const validateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

       if(!userData.firstName.trim().length){
           erorString.firstName = "Fill in The Required FirstName"
       }else {
            erorString.firstName = ''

       }

       if(!userData.lastName.trim().length){
            erorString.lastName = "Fill in The Required LastName"

       }else {
           erorString.lastName = ''

       }

       if(!userData.email.trim().length){
            erorString.email = "Fill in The Required Email"

       }else if(!validateMail.test(userData.email)){
           erorString.email = "Fill in Email"
       }else {
            erorString.email = ''

       }

       if(!userData.password.trim().length){
            erorString.password = " Fill in The Required Pasword"

       }else if(userData.password.trim().length && userData.password.trim().length < 8){
            erorString.password = "Should Not be Less 8"
       }else {
           erorString.password = ''

       }

       if(!userData.confilmPassword.trim().length){
            erorString.confilmPassword = "Fill in The Required confilmPassword"

       }else if(userData.confilmPassword.trim().length && userData.confilmPassword.trim().length !== userData.password.length){
             erorString.confilmPassword = "Do Not Correspond to Each Other Confilm Password and Password"

       }else {
           erorString.confilmPassword = ''

       }

       if(!userData.phoneNumber.trim().length){
            erorString.phoneNumber = "Fill in The Role Reference Number"

       }else if(userData.phoneNumber.trim().length && userData.phoneNumber.trim().length < 16){
           erorString.phoneNumber = "The Review Number Cannot be Less 16"
       }else {
            erorString.phoneNumber = ''
       }

        setErorText(erorString)
        if(!erorString.firstName && !erorString.lastName && !erorString.phoneNumber && !erorString.password
        && !erorString.confilmPassword && !erorString.email
       ){
            dispatch({type:"SET_USER",payload:userData})
            setUserData({...userData,firstName: '',lastName: '',phoneNumber: '',
                confilmPassword: '',email: '',password: ''})
        }
    }
    const handleChenge = (e) =>{
        setUserData({...userData,[e.target.name]:e.target.value})
    }


    return <div className="lesson-add-users">

         <div className="registration-list">
             <h1>Registration Form</h1>

             <div className="registration-tools">
                 <div className="input-name">
                     <span>FirstName</span>
                 </div>
                 <label>
                     <input  value={userData.firstName}  onChange={handleChenge} type="text" name="firstName" placeholder="Search FirstName..."/>
                     <h3>{erorText.firstName}</h3>
                 </label>
             </div>

             <div className="registration-tools">
                 <div className="input-name">
                     <span>LastName</span>
                 </div>
                 <label>
                     <input value={userData.lastName} onChange={handleChenge} type="text" name="lastName" placeholder="Search LastName..."/>
                     <h3>{erorText.lastName}</h3>
                 </label>
             </div>

             <div className="registration-tools">
                 <div className="input-name">
                     <span>Email</span>
                 </div>
                 <label>
                     <input value={userData.email} onChange={handleChenge} type="text" name="email" placeholder="Search Email..."/>
                     <h3>{erorText.email}</h3>
                 </label>
             </div>

             <div className="registration-tools">
                 <div className="input-name">
                     <span>Password</span>
                 </div>
                 <label>
                     <input value={userData.password} onChange={handleChenge} type="text" name="password" placeholder="Search Password..."/>
                     <h3>{erorText.password}</h3>
                 </label>
             </div>


             <div className="registration-tools">
                 <div className="input-name">
                     <span>confilmPassword</span>
                 </div>
                 <label>
                     <input value={userData.confilmPassword} onChange={handleChenge} type="text" name="confilmPassword" placeholder="Search ConfilmPassword..."/>
                     <h3>{erorText.confilmPassword}</h3>
                 </label>
             </div>

             <div className="registration-tools">
                 <div className="input-name">
                     <span>PhoneNumber</span>
                 </div>
                 <label>
                     <input value={userData.phoneNumber} onChange={handleChenge} type="number" name="phoneNumber" placeholder="Search PhoneNumber..."/>
                     <h3>{erorText.phoneNumber}</h3>
                 </label>
             </div>
             <button onClick={handleClick}>Submit</button>

         </div>

         <div className="users">
             {selectorList.length?selectorList.map((item,index)=>{
                  return <Components index = {index} item = {item} key={index}/>
             }) :null}
         </div>
    </div>
}
export default AddUsers