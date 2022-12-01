import React from "react";
import "./index.scss"
import LessonAddName from "./lesson1";
import EvenOddNumber from "./lesson-even-odd-number";
import PortableImage from "./portable-image";
import PortableSalonCars from "./portable-salon-cars";
import PopyContent from "./popy-content for button";
import SelectInput from "./select-input";



const LessonsFunctionComponent = () => {

    return <div className="Function-Component-Lessons">
       <LessonAddName/>
       <EvenOddNumber/>
       <PortableImage/>
       <PortableSalonCars/>
       <PopyContent/>
       <SelectInput/>
    </div>


}
export default LessonsFunctionComponent