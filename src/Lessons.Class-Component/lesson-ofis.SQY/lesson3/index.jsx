import React from "react";
import "./index.css"



class Lesson3 extends React.Component{

    state = {
        produkts:{
            prise:'',
            name:'',
        },
         produktList:[]
    }

    hendleOnchenge = (e) =>{
        //asuma   du obekt jan<...>nuyn dev mna .es qo anunerov qez arjeq em talu
        this.setState({produkts:{...this.state.produkts,[e.target.name]:e.target.value}})
    }

    hendleClick = () => {
        let {produkts , produktList} = this.state
        //asuma zangvat jan <...> du el vonc kas mna..vekal im popoxakanerin u kic mejt
         this.setState({produktList:[...produktList,produkts], produkts: {
                 prise:'',
                 name:''
                 ///asuma arecir...de mi hatel UBDEYT em anum qo naxnakan vijak@

             }})
    }
    render() {
        let {produktList} = this.state
        return <div className="lesson-3">
            <h1>Lessons 3</h1>
            <div className="input-box">
                <input onChange={this.hendleOnchenge} value={this.state.produkts.prise} name="prise"  type="number" placeholder="Search Prise..."/>
                <input onChange={this.hendleOnchenge} value={this.state.produkts.name} name="name" type="text" placeholder="Search Name..."/>
                 <button onClick={this.hendleClick}>Save</button>
            </div>
            <div className="profukt-box">
                {produktList.length?produktList.map((item , index)=>{
                     return <div  item = {this.state.produkts}>
                          <h1>{item.name}</h1>
                         {item.prise <10000 ? <p>{item.prise}</p> :
                             <div>
                                 <p>OLD PRISE <span style={{ textDecoration:'line-through' }}>{item.prise}</span></p>
                                 <p>NEW PRISE <span style={{color:"red"}}>{item.prise - 3000}</span></p>
                             </div>}
                             {/*partadir diva uzummm?????*/}

                         {/*karas Map fras...return anes div...*/}
                         {/*iran tas element@ vor mej zangvatit arjeqnernen*/}
                         {/* u et divi mej iranc ogtagortes vor tpes ekranin*/}
                     </div>
                }) :null}
            </div>

        </div>
    }

}
export default Lesson3