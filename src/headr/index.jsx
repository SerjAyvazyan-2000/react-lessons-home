import React from "react";
import "./index.scss"
import {NavLink} from "react-router-dom"

const Headr = () => {
    return <div className="headr">
          <h1>Welqome To My Lessons</h1>
        <div className="my-lessons">
             <ul>
                 <li >
                     <NavLink  to={"/Lessons Function Component"}>Lessons Function Component</NavLink>
                 </li>
                  <li>
                      <NavLink to={"/Lessons Function Component Dey 2"}>Lessons Function Component Dey 2</NavLink>
                  </li>
                 <li>
                     <NavLink to={"/Lessons UsEffect"}>Lessons UsEffect</NavLink>
                 </li>
             </ul>
        </div>
    </div>
}
export default Headr