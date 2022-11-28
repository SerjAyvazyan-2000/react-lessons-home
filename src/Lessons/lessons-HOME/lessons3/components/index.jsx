import React from "react";
import "./index.css"


class Components extends React.Component{

    render() {
        return<div className="car-box" >
            <h1>M5 E-60</h1>
                  <img   src={this.props.item.img} alt=""/>

              </div>


    }

}
export default Components