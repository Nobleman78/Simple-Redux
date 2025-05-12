import { TODOS_FAILED, TODOS_REQUEST, TODOS_SUCCESS } from "../Constant/Constant";

const initialTodos = {
    isloading: false,
    todos: [],
    error: null

}
const todosReducer = (state = initialTodos, action) => {
    switch (action.type) {
        case TODOS_REQUEST:
            return {
                ...state,
                isloading: true
            }
        case TODOS_SUCCESS:
            return {

                isloading: false,
                todos: action.payload,
                error: null
            }
        case TODOS_FAILED:
            return {
                todos: [],
                isloading: false,
                error: action.payload

            }

        default:
            return state;
    }
}
export default todosReducer;