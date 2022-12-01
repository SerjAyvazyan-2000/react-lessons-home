import React from "react";
import "./index.css"

class Lessons2 extends React.Component{
    state = {
         number:'',
         numberList:[]
    }

    hendleOnchenge = (e) =>{
         this.setState({number:e.target.value})
    }
    hendleClick = () =>{
          let {numberList,number} = this.state
          this.setState({numberList:[...numberList,number],number: ''})
    }

    render() {
        let {numberList,number} = this.state
        return <div className="lesson-2">
            <h1>Lessons 2</h1>
            <input value={number}  onChange={this.hendleOnchenge} type="number" placeholder='Search Number...'/>
             <button onClick={this.hendleClick}>Save</button>
            <div className="number-box">
               <div className="render-number">
                       <h1>Couple Number</h1>
                    <div className="map-box">
                        {numberList.length?numberList.map((item ,index) =>{
                           return  item % 2 === 0 ? <p> {item}</p> :null
                        }): null}
                    </div>
               </div>
                <div className="render-number">
                     <h1>Odd Number</h1>
                    <div className="map-box">
                        {numberList.length?numberList.map((item ,index) =>{
                            return item % 2 !== 0 ?<p>{index}.{item}</p> :null
                        }): null}
                    </div>

                </div>
            </div>
        </div>
    }

}
export default Lessons2