// Initializing Const

const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
const { thunk } = require("redux-thunk");

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"
todosURL = 'https://jsonplaceholder.typicode.com/todos'

//Initial State

const initialTodoState = {
    todos: [],
    isloading: false,
    error: null
}

// Action declarations
const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}
const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}

//Reducer Declarations

const todosReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isloading: true,


            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isloading: false,
                todos: action.payload

            }
        case GET_TODOS_FAILED:
            return {
                ...state,
                isloading: false,
                error: action.payload

            }
        default:
            return state

    }
}
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest())
        axios.get(todosURL)
            .then(res => {
                const todos = res.data
                const title = todos.map(item => item.title)
                dispatch(getTodosSuccess(title))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(getTodosFailed(errorMessage))
            })
    }
}

// Declare store
const store = createStore(todosReducer, applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchData())