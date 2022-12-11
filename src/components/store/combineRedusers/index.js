import  {combineReducers} from "redux"
import AddUsers from "./reducers/addUsers";
import loginKey from "./reducers/login";



const rootReducer = combineReducers({
    AddUsers,
    loginKey

})



export default rootReducer