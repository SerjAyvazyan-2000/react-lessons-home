import React from "react";
import "./index.css"
// input dashtum grum enq anun:click enq anum buttoni vra
// nerqevum hamarakalat beruma anuner@:

class Lesson1 extends React.Component{

    state ={
        inputText:'',
        textAray:[]
    }

    hendleOnchenge = (e) =>{
         this.setState({inputText:e.target.value})
    }

    hendleClick = () =>{
         this.setState({textAray:[...this.state.textAray,this.state.inputText]})
    }


    render() {
        return <div className="lesson-1">
            <h1>Lesson 1</h1>
            <input onChange={this.hendleOnchenge} type="text" placeholder="Search Name...."/>
            <button onClick={this.hendleClick}>Save</button>
            {this.state.textAray.map((item,index) =>{
                 return <p style={{color:"red"}}> {index}. {item}</p>
            })}

        </div>
    }

}
export default Lesson1