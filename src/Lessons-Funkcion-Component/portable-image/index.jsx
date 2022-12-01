import React, {useState} from "react";
import "./index.scss"
import img from "../../../src/assets/image/1.jpeg"
import img1 from "../../assets/image/2.jpeg"
import img2 from "../../assets/image/3.jpeg"
import img3 from "../../assets/image/4.jpeg"
import img4 from "../../assets/image/6.jpeg"
import img5 from "../../assets/image/7.jpeg"
import Components from "./components";

const PortableImage = () => {
    const [image , setImage] = useState([
        {name:'E60-M5.Legandary',img:img,id:1},
        {name:'E60-M4',img:img1,id:2},
        {name:'E60-M3',img:img2,id:3},
        {name:'E60-2.0',img:img3,id:4},
        {name:'E60-2.5',img:img4,id:5},
        {name:'E60-3.5',img:img5,id:6},
    ])

    const hendlClick = () => {
        image.sort(() => (Math.random() > .5) ? 1 : -1);
        setImage([...image])
    }
    return <div className="P-portabloe-img">
             <h1>Lessons 3</h1>
             <h1>BMW-M5-E60..LEGEDARY</h1>
             <button onClick={hendlClick}>Sumbit To Mix</button>
        <div className="P-image-block">
            {image.length? image.map((item,index)=>{
              return  <Components item = {item} key={index}/>
            }) : null}
        </div>
    </div>
}
export default PortableImage