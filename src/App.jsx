import React from "react";
import './App.css';
import {Route,Routes} from "react-router-dom"
import LessonsFunctionComponent from "./Lessons-Funkcion-Component";
import LessonsFunctionComponent2 from "./Lessons-function-component-2";
import LessonsUseRef from "./Lessons-useRef";
import Headr from "./components/headr";
import Foter from "./components/fotter";
import Redux from "./Lessons-Redux";
import LessonUsEfect from "./lessons-usEfect";
import Login from "./login";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";






function App() {
    const [flag , setFlag] = useState(true)
    const loginKey = useSelector(state => state.loginKey.key)
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         dispatch({type:"CHECK_KEY"})
    //       setFlag(false)
    //     },2000)
    // })



  return (
    <div className="App">
        <Headr/>
        {!loginKey && flag?
<Routes>
    <Route path={"//Lessons-Function-Component"} element={<LessonsFunctionComponent />}></Route>
    <Route path={"/Lessons-Function-Component-Dey-2"} element={<LessonsFunctionComponent2/>}></Route>
    <Route path={"/Lessons-UsEffect"} element={<LessonUsEfect/>}></Route>
    <Route path={"/Lessons-UseRef"} element={<LessonsUseRef/>}></Route>
    <Route path={"/redux"} element={<Redux/>}></Route>

</Routes>
            :
            <Routes>
                <Route path={"/login"} element={<Login/>}></Route>
            </Routes>

        }

        <Foter/>
    </div>
  );
}

export default App;
