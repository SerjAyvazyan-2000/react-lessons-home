import React from "react";
import "./index.scss"

const Components = ({item}) => {

    return<div style={item.id ? {backgroundImage:`url(${item.info})`,border:"none"} : null} className="p-boxes-box">{item.id? null : item.info}</div>
}
export default Components
