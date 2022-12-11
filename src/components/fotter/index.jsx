import React from "react";
import "./index.scss"
import img from "../../assets/image/3.jpeg"

const Foter = () => {

    return <div className="foter">
         <div style={{backgroundImage:`url(${img})`}} className="image-fotter">
             <h2>M5 LEGENDARY</h2>
         </div>
    </div>
}
export default Foter