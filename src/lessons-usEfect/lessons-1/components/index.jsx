import React from "react";
import "./index.scss"

const Components = (props) =>  {

    return <>
        <h1>{props.info.name}</h1>
        <div className="cars-image" style={{backgroundImage:`url(${props.info.img})`}}></div>
    </>
}
export default Components