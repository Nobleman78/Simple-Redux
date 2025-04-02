const {createStore}  = require("redux");

// Defining Constant
const ADD_USER = 'ADD_USER'
// Initial State Declaration
const initialUserState = {
    users: [
        { name: 'Jesmin Chakma',ID:1 }
    ]
}
// Action - what we are going to 
// Action is a object there has two parameters 1. type 2. payload
// When we want to pass data in reducer we will use payload
// Reducer work based on action Type
// Dispatch mean that to trigger something or to send something.
const addUser = () => {
    return {
        type: ADD_USER,
        payload: [{ name: 'arkit', ID:2 },{name:'Nikal',ID:3}]
            
        
    }
}
const userReducer = (state=initialUserState,action)=>{
    switch (action.type) {
        case ADD_USER:
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        
        default:
            return state;
    }
}

// Store meaning hold the state
// 1.getState(), 2.dispatch(), 3.subscribe(),


//Create Store
const store = createStore(userReducer)
store.subscribe(()=>{
    console.log(JSON.stringify(store.getState(),null,2))
})
// Dispatch 
store.dispatch(addUser())

