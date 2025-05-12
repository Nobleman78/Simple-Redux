import { createStore } from "redux";
import counterReducer from "../components/Reducers/reducers";


const store = createStore(counterReducer)
export default store;