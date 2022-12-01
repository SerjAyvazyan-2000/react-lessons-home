import React from "react";
import "./index.css"
 // click aneluc   1 text@ petqe gna 1 xumb,2 2-rd xumb

class Lesson1 extends React.Component{

    state = {
         name:"",
         nameList:[],
         cunt:0

    }
    hendleOnchenge = (e) =>{
           this.setState({name:e.target.value})
    }
     hendleClick = () =>{

        let {nameList, name} = this.state
         this.setState({nameList: [...nameList,name],name: ''})
         // this.setState({cunt:++this.state.cunt})
         // console.log(this.state.cunt)
     }


    render() {
        let {nameList,cunt} = this.state

        return <div className="lesson-1">
            <h1>Lesson 1</h1>
            <input onChange={this.hendleOnchenge} value={this.state.name} type="text" placeholder="Search Name..."/>

             <button onClick={this.hendleClick}>Save</button>
            <div className="name-list">
                <div className="Group">
                      <h1>Group.1</h1>
                     <div className="render-box">
                         {nameList.length?nameList.map((item,index) =>{
                             return  index % 2 === 0 ? <p>{index}.{item}</p>:null
                         }): null}
                     </div>
                </div>
                <div className="Group">
                     <h1>Group.2</h1>
                    <div className="render-box">
                        {nameList.length?nameList.map((item,index)=>{
                            return index % 2 !== 0 ? <p>{index+1}.{item}</p>:null
                        }):null}
                    </div>
                </div>


             </div>
           </div>
    }
}
export default Lesson1