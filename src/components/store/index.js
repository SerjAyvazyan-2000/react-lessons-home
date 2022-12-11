import {createStore} from "redux"
import rootReducer from "./combineRedusers";



const store = createStore(rootReducer)

export default store