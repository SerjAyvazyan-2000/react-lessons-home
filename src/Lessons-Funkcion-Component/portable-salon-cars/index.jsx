import React, {useState} from "react";
import "./index.scss"

const PortableSalonCars = () => {
    const [bmwCars,setBmwCars] = useState([])
    const [mersCars , setMersCars] = useState([])
  const cars =[
      {name:"BMW-E60 M5 Legendary",id:'bmw'},
      {name:"BMW-E60 2.0",id:"bmw"},
      {name:"BMW-E60 2.5",id:"bmw"},
      {name:"BMW-E60 3.0",id:"bmw"},
      {name:"BMW-E60 3.5",id:"bmw"},
      {name:"BMW-E60 4.0",id:"bmw"},
      {name:"BMW-E60 4.5",id:"bmw"},
      {name:"Mersedes-Benz C-200",id:"mers"},
      {name:"Mersedes-Benz E-320",id:"mers"},
      {name:"Mersedes-Benz 124 7.1 Legendary",id:"mers"},
      {name:"Mersedes-Benz S-500",id:"mers"},
      {name:"Mersedes-Benz E-350",id:"mers"},
      {name:"Mersedes-Benz S-600",id:"mers"},
      {name:"Mersedes-Benz AKULA",id:"mers"}
  ]
   const hendlClick = () => {
     let newCarsBmw = cars.filter(el => el.id === "bmw" )
       let newCarsMers = cars.filter(el => el.id === "mers")
       newCarsBmw.sort(() => (Math.random() > .5) ? 1 : -1);
       newCarsMers.sort(() => (Math.random() > .5) ? 1 : -1);
       setBmwCars(newCarsBmw)
       setMersCars(newCarsMers)
   }

    return <div className="P-salon-cars-block">
         <h1>Lesson 4</h1>
         <button onClick={hendlClick}>Submit To Portable</button>
         <div className="p-salon-cars">
              <div className="salon-cars">
                  <h1>SALON-BMW</h1>
                  {bmwCars.map((item,index) =>{
                      return <h2 key={index}>{item.name}</h2>
                  })}
              </div>
             <div className="salon-cars">
                 <h1>SALON-CARS-MERSEDES-BWM</h1>
                 {cars.length? cars.map((item,index)=>{
                      return <h3 key={index}> {index+1}. {item.name}</h3>
                 }):null}

             </div>
             <div className="salon-cars">
                  <h1>SALON-MERSEDES</h1>
                 {mersCars.map((item,index) =>{
                      return <h2 key={index}>{item.name}</h2>
                 })}
             </div>
         </div>
    </div>
}
export default PortableSalonCars