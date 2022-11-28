import React from "react";
import "./index.css"

class Lesson4 extends React.Component{

    state = {
         timName:[
             {name:'Vardan',id:1},
             {name:'Meri',id:2},
             {name:'Lilit',id:3},
             {name:'Hovo',id:4},
             {name:'Lusine',id:5},
             {name:'Mariam',id:6},
             {name:'Hayk',id:7},
             {name:'Vlad',id:8},
             {name:'Nare',id:9},
             {name:'Adelina',id:10},
         ],
        groupList:[],
        groupList1:[]
    }

    hendleClick = () =>{
        let {groupList,groupList1,timName} = this.state
        timName.forEach((item,index)=>{
              index % 2 === 0 ? groupList.push(item) : groupList1.push(item)
        })
        this.setState({groupList,groupList1})
    }

    render() {
        let  {timName,groupList,groupList1} = this.state

        return <div className="lesson-4">
            <h1>LESSON 4</h1>
            <button onClick={this.hendleClick}>Save Tim</button>
            <div className="tim-block">
                <div className="tim-box">
                    <h1>Tim.1</h1>
                    {groupList.map((item,index)=>{
                        {
                            console.log(item)}
                    })}
                </div>
                <div className="tim-box">
                    <h1>Tim Group</h1>
                    {timName.map((item,index)=>{
                         return <p key={index}>{index+1}.{item.name}</p>
                    })}
                </div>

                <div className="tim-box">
                    <h1>Tim.2</h1>
                </div>
            </div>
        </div>
    }

}
export default Lesson4