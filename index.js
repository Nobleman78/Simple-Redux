// Defining Constant
const ADD_USER = 'ADD_USER'
// Initial State Declaration
const initialUserState = {
    users: [
        { name: 'Jesmin Chakma' }
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
        payload: { name: 'arkit' }
    }
}
const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        default:
            return state;
    }

}
