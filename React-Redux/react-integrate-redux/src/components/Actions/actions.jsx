import { DECREMENT, INCREMENT, RESET } from "../Constants/constant"


export const incrementCount = () => {
    return {
        type: INCREMENT
    }
}
export const decrementCount = () => {
    return {
        type: DECREMENT
    }
}
export const resetCount = () => {
    return {
        type: RESET
    }
}