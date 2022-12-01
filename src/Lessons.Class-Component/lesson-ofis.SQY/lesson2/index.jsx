import React from "react";
import "./index.css"

// input dashteric mekum mutqagrel poqr tiv,myusum mec;
// Save-aneluc heto iranch mijakayqi tver@ nkari ekranin ev guynov
// nerki zuyg tver@

class Lesson2 extends React.Component{

    state = {
         minNumber:'',
         maxNumber:'',
         arrayNumber:[]
    }

    hendleOnchenge = (e) =>{
         this.setState({[e.target.name]:e.target.value})
    }

    hendleClick = () => {
          let {minNumber,maxNumber,arrayNumber} = this.state
          for(minNumber;minNumber <= maxNumber;minNumber++){
              arrayNumber.push(minNumber)
              this.setState({arrayNumber})
          }
    }


    render() {
        let {arrayNumber} = this.state
        return <div className="lesson-2">
              <h1>Lesson 2</h1>
                <input onChange={this.hendleOnchenge} name="minNumber" type="number" placeholder="Search Min Number..."/>
                <input onChange={this.hendleOnchenge} name="maxNumber" type="number" placeholder="Search Max Number..."/>
              <button onClick={this.hendleClick}>Save</button>
            {arrayNumber.map((item ,index)=>{
                return item % 2 !== 0 ? <p>{item}</p> : <p style={{color:"red"}}>{item}</p>
            })}

        </div>
    }

}
export default Lesson2