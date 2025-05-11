const { createStore } = require("redux");

// Defining Constant
const ADD_USER = 'ADD_USER'
// Initial State Declaration
const initialUserState = {
    users: [{ name: 'Jesmin Chakma', ID: 1 }],
    count: 1
}
// Action - what we are going to 
// Action is a object there has two parameters 1. type 2. payload
// When we want to pass data in reducer we will use payload
// Reducer work based on action Type
// Dispatch mean that to trigger something or to send something.


const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user


    }
}
const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
          
                users: [...state.users, action.payload],
                count: state.count + 1
            }

        default:
            return state;
    }
}

// Store meaning hold the state
// 1.getState(), 2.dispatch(), 3.subscribe(),


//Create Store
const store = createStore(userReducer)
store.subscribe(() => {
    console.log(store.getState())
})
// Dispatch 
store.dispatch(addUser({ name: 'arkit', ID: 2 }))
store.dispatch(addUser({ name: 'Nikal', ID: 3 }))





