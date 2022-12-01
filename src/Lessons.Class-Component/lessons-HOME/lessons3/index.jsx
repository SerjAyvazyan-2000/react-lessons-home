import React from "react";
import "./index.css"
import img from "../../../../src/assets/image/1.jpeg"
import img1 from "../../../assets/image/2.jpeg"
import img2 from "../../../assets/image/3.jpeg"
import img3 from "../../../assets/image/4.jpeg"
import img4 from "../../../assets/image/6.jpeg"
import img5 from "../../../assets/image/7.jpeg"
import Components from "./components";


// Random funkciayi ognutyamb poxum enq nkarneri dirq@
//     clicki jamanak


class Lesson3 extends React.Component{

    state = {
         produkImage:[
             {name:"E.60-M.5", img:img , id:1},
             {name: "E.60-M.5" , img:img1 , id:2},
             {name:"E.60-M.5", img:img2 , id:3},
             {name: "E.60-M.5" , img:img3 , id:4},
             {name:"E.60-M.5", img:img4 , id:5},
             {name: "E.60-M.5" , img:img5 , id:6},
         ],
        randomNumber:''
    }
    hendleClick = () =>{
        let randomNumber = Math.floor(Math.random()* 6)
        this.setState({randomNumber:randomNumber})
    }

    render() {
        let {produkImage , randomNumber} = this.state
        return <div className="image-block">
            <div className="headr-block">
                <h1>Lessons 3</h1>
                <button onClick={this.hendleClick} >Save</button>
                <h1>BOXES IS HEAR</h1>
            </div>
            <div className="cars-list">
               {produkImage.length?produkImage.map((item,index) =>{
                   return randomNumber === index ? <Components item = {item}/>: item.name
              }) :null}
        </div>
        </div>
    }
}
export default Lesson3