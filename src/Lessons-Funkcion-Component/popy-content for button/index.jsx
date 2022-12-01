import React, {useState} from "react";
import "./index.scss"
import E60 from "../../assets/image/2.jpeg"
import M124 from "../../assets/image/124.jpeg"
import M211 from "../../assets/image/211.jpeg"
import M212 from "../../assets/image/212.jpeg"
import Components from "./components";

const PopyContent = () =>{
    const [car , setCar] = useState([])
    let carsInformation = [
        {name:"BWM E60 M5 LEGENDARY",img:E60},
        {name:"Mersedes-Benz 124 7.1 Legendary",img:M124},
        {name:'Mersedes-Benz E-320 211',img:M211},
        {name:"Mersedes-Benz E-350 212",img:M212}
    ]
  const hendelClick = (carName) =>{
       let newCar = carsInformation.filter(el => el.name === carName)
       setCar(newCar[0])
  }

    return <div className="p-popy-content">
        <h1>Lesson 5</h1>
         <div className="p-menyu-list">
             <ul>
                 <li className={`${ car.name==="BWM E60 M5 LEGENDARY"? "active":null}`}
                     onClick={()=>hendelClick("BWM E60 M5 LEGENDARY")}>BWM E60 M5 LEGENDARY</li>

                 <li className={`${car.name ==="Mersedes-Benz 124 7.1 Legendary"? "active" : null }`}
                     onClick={()=>hendelClick("Mersedes-Benz 124 7.1 Legendary")}>Mersedes-Benz 124 7.1 Legendary</li>

                 <li className={`${car.name ==="Mersedes-Benz E-320 211?" ? "active":null }`} onClick={()=>hendelClick("Mersedes-Benz E-320 211")}>Mersedes-Benz E-320 211</li>
                 <li onClick={()=>hendelClick("Mersedes-Benz E-350 212")}>Mersedes-Benz E-350 212</li>
             </ul>
         </div>
        <div className="cars-informacion">
            {car?<Components info ={car}/>: null}
        </div>
    </div>
}

export default PopyContent