import  {combineReducers} from "redux"
import AddUsers from "./reducers/addUsers";
import loginKey from "./reducers/login";
import AddRemoveCash from "./reducers";



const rootReducer = combineReducers({
    AddUsers,
    loginKey,
    AddRemoveCash

})



export default rootReducer