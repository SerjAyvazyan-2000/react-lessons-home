

const defaultState = {
    key:''
}

const loginKey = (state = defaultState , action) => {
    switch (action.type) {
        case "SET_KEY":{
            return  {...state,key: action.payload}
        }
        case "CHECK_KEY":{
             let newKey = localStorage.getItem("password_Email")
               return  {...state,key: newKey}
        }
        default :{
          return {...state}
        }
    }
}

export  default  loginKey