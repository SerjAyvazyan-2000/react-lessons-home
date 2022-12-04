import React from "react";
import "./index.scss"
import img from "../assets/image/7.jpeg"

const Foter = () => {

    return <div className="foter">
         <div style={{backgroundImage:`url(${img})`}} className="image-fotter">
             <h1>End My Lessons Thenqs</h1>
             <h2>M5 LEGENDARY</h2>
         </div>
    </div>
}
export default Foter