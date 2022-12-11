


const defaultState = {
     usersList:[]

}


const AddUsers = (state = defaultState , action) => {
    switch (action.type) {
        case "SET_USER":{
            return {...state,usersList: [...state.usersList,action.payload]}
        }
        case "DELETE_USER":{
             return {...state,usersList: state.usersList.filter((el ,i) => i !== action.payload)}
        }
        default: {
             return {...state}
        }
    }


}
export default AddUsers