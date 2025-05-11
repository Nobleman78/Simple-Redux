const { createStore, combineReducers, applyMiddleware } = require("redux")
const { default: logger } = require("redux-logger")

//For Products
const GET_PRODUCTS = "GET_PRODUCTS"
const ADD_PRODUCT = "ADD_PRODUCT"

//For Cart
const GET_CART = "GET_CART"
const ADD_CART = "ADD_CART"

// Initial State for  products
const products_initial_state = {
    products: ['mango', 'litchi'],
    numberOfProducts: 2
}


//Initial state for carts
const cart_initial_state = {
    cart: ['mango'],
    numberOfProducts: 1
}

//Products Action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product

    }
}

// Cart Action
const getCart = () => {
    return {
        type: GET_CART
    }
}
const addCart = (product) => {
    return {
        type: ADD_CART,
        payload: product
    }
}

/*Define Reducers For Products */

const productsReducer = (state = products_initial_state, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}
/* Define Reducer For Cart */

const cartReducer = (state = cart_initial_state, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state
            }
        case ADD_CART:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}

//Combine Reducer
const rootReducer = combineReducers({
    cartR: cartReducer,
    productR: productsReducer
})



/*Create Store*/
const store = createStore(rootReducer,applyMiddleware(logger))
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(addProduct('banana'))
// store.dispatch(getProducts())
store.dispatch(addCart('Guava'))

