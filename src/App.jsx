import './App.css';
import LessonsFunctionComponent from "./Lessons-Funkcion-Component";
import LessonsFunctionComponent2 from "./Lessons-function-component-2";
import LessonUsEfect from "./lessons-usEfect";
import Headr from "./headr";
import {Route ,Routes} from "react-router-dom"
import Foter from "./fotter";



function App() {
  return (
    <div className="App">
         <Headr/>
       <Routes>
           <Route path={"/Lessons Function Component"} element={<LessonsFunctionComponent/>}></Route>
           <Route path={"/Lessons Function Component Dey 2"} element={<LessonsFunctionComponent2/>}></Route>
           <Route path={"/Lessons UsEffect"} element={<LessonUsEfect/>}></Route>
       </Routes>
        <Foter/>

    </div>
  );
}

export default App;
