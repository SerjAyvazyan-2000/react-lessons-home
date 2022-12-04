import './App.css';
import LessonsFunctionComponent from "./Lessons-Funkcion-Component";
import LessonsFunctionComponent2 from "./Lessons-function-component-2";
import LessonUsEfect from "./lessons-usEfect";
import {Route ,Routes} from "react-router-dom"
import LessonsUseRef from "./Lessons-useRef";
import AddBoxes from "./Lessons-Add-boxes";
import Headr from "./headr";
import Foter from "./fotter";




function App() {
  return (
    <div className="App">
         <Headr/>
       <Routes>
           <Route path={"//Lessons-Function-Component"} element={<LessonsFunctionComponent />}></Route>
           <Route path={"/Lessons-Function-Component-Dey-2"} element={<LessonsFunctionComponent2/>}></Route>
           <Route path={"/Lessons-UsEffect"} element={<LessonUsEfect/>}></Route>
           <Route path={"/Lessons-UseRef"} element={<LessonsUseRef/>}></Route>
           <Route path={"/add-boxes"} element={<AddBoxes/>}></Route>
       </Routes>
        <Foter/>
    </div>
  );
}

export default App;
