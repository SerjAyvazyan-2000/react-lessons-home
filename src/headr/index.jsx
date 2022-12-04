import React from "react";
import "./index.scss"
import {NavLink} from "react-router-dom"

const Headr = () => {

    return <div className="headr">
        <h1>Welqome to My Lessons</h1>
        <div className="Components-lessons">
      <ul>
        <li >
            <NavLink  to={"/Lessons-Function-Component"}>Lessons Function Component</NavLink>
        </li>
        <li>
            <NavLink to={"/Lessons-Function-Component-Dey-2"}>Lessons Function Component Dey 2</NavLink>
        </li>
        <li>
            <NavLink to={"/Lessons-UsEffect"}>Lessons UsEffect</NavLink>
        </li>

        <li>
            <NavLink to={"/Lessons-UseRef"}>Lessons UsEffect</NavLink>
        </li>
        <li>
            <NavLink to={"/Lessons-UseRef"}>Lessons UseRef</NavLink>
        </li>
          <li>
              <NavLink to={"/add-boxes"}>Add Boxes</NavLink>
          </li>
  </ul>
        </div>
    </div>

}
export default Headr